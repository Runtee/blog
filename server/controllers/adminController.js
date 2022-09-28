const bcrypt = require("bcrypt");
const User = require("../models/admin");

module.exports = {
  login: (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email: email }, (error, user) => {
      if (user) {
        bcrypt.compare(password, user.password, (error, same) => {
          if (same) {
            req.session.userId = user._id; // if passwords match
            // // store user session
            req.isAuthenticated = true;
            res.redirect("/dashboard");
          } else {
            const validationErrors = ["Login details is incorrect"];
            req.flash("validationErrors", validationErrors);
            res.redirect("/login");
          }
        });
      } else {
        const validationErrors = ["Login details is incorrect"];
        req.flash("validationErrors", validationErrors);
        req.flash("data", req.body);
        res.redirect("/login");
      }
    });
  },
  loginR: (req, res) => {
    res.render("login", {
      errors: req.flash("validationErrors"),
    });
  },
  changePassword: async (req, res) => {
    const password = req.body.password;
    const newPassword = req.body.npassword;
    const Confirmpassword = req.body.cpassword;
    var id = req.session.userId;
    bcrypt.hash(newPassword, 10, (e, newhash) => {
      User.findById(id, (error, user) => {
        if (user) {
          bcrypt.compare(password, user.password, (error, same) => {
            if (same) {
              if (newPassword === Confirmpassword) {
                // var usr = bcrypt.hash(newPassword, 10)
                User.findByIdAndUpdate(
                  id,
                  { password: newhash },
                  (err, upd) => {
                    if (upd) {
                      req.flash("success", "Password successfuly changed");
                      res.redirect("/change-password");
                    }
                  }
                );
              } else {
                const validationErrors = [
                  "confirm password is not the same with new password",
                ];
                req.flash("error", validationErrors);
                res.redirect("/change-password");
              }
            } else {
              const validationErrors = ["password is not correct"];
              req.flash("error", validationErrors);
              res.redirect("/change-password");
            }
          });
        }
      });
    });
  },
  changePasswordR: (req, res) => {
    res.render("change", {
      errors: req.flash("error"),
      success: req.flash("success"),
    });
  },

  logout: (req, res) => {
    req.session.destroy(() => {
      res.redirect("/admin/login");
    });
  },
};
