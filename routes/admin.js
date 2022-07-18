const router = require("express").Router();

const {
  blogPost,
  update,
  deletePost,
  blogWrite,
  blogDelete,
  blogUpdate,
  
} = require("../controllers/blogController.js");
const {
  login,
  changePassword,
  loginR,
  changePasswordR,
  logout
} = require("../controllers/adminController.js");
const {
  userSignInValidationRules,
  postBlogValidationRules,
  deleteValidationRules,
  updateValidationRules,
  validatePost,
  validateUpdate,
  validateDelete,
  validateSignin,
} = require("../validators/validator");
router.get("/blog", blogWrite);
router.post("/blog",[postBlogValidationRules,validatePost], blogPost);
router.get("/update", blogUpdate);
router.post("/update",[updateValidationRules,validateUpdate], update);
router.get("/delete", blogDelete);
router.post("/delete", [deleteValidationRules,validateDelete], deletePost);
router.get("/login", loginR);
router.post("/login", [userSignInValidationRules,validateSignin], login);
router.get("/change-password", changePasswordR);
router.post("/change-password", changePassword);
router.get('/logout',logout)

module.exports= router
