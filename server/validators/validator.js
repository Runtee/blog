const { check, validationResult } = require("express-validator");

const userSignInValidationRules = () => {
    return [
        check("email", "Invalid email").not().isEmpty().isEmail(),
        check("password", "Invalid password").not().isEmpty().isLength({ min: 6 }),
    ];
};

const userContactUsValidationRules = () => {
    return [
        check("name", "Please enter a name").not().isEmpty(),
        check("email", "Please enter a valid email address")
            .not()
            .isEmpty()
            .isEmail(),
        check("message", "Please enter a message with at least 10 words")
            .not()
            .isEmpty()
            .isLength({ min: 10 }),
    ];
};

const postBlogValidationRules = () => {
    return [
        check("title", "Please enter a title").not().isEmpty().isString(),
        check("image", "Please upload an image").not().isEmpty(),
    ];
};

const deleteValidationRules = () => {
    return [
        check("title", "Please enter a title").not().isEmpty().isString(),
        check("image", "Please upload an image").not().isEmpty(),
    ];
};

const updateValidationRules = () => {
    return [
        check("title", "Please enter a title").not().isEmpty().isString(),
        check("image", "Please upload an image").not().isEmpty(),
    ];
};
const searchValidationRules = () => {
    return [check("title", "Please enter a title").not().isEmpty().isString()];
};

const validateSignin = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        var messages = [];
        errors.array().forEach((error) => {
            messages.push(error.msg);
        });
        req.flash("error", messages);
        return res.redirect("/admin/signin");
    }
    next();
};

const validatePost = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        var messages = [];
        errors.array().forEach((error) => {
            messages.push(error.msg);
        });
        console.log(messages);
        req.flash("error", messages);
        return res.redirect("/admin/blog");
    }
    next();
};
const validateDelete = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        var messages = [];
        errors.array().forEach((error) => {
            messages.push(error.msg);
        });
        console.log(messages);
        req.flash("error", messages);
        return res.redirect("/admin/delete");
    }
    next();
};
const validateUpdate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        var messages = [];
        errors.array().forEach((error) => {
            messages.push(error.msg);
        });
        console.log(messages);
        req.flash("error", messages);
        return res.redirect("/admin/update");
    }
    next();
};
const validateSearch = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        var messages = [];
        errors.array().forEach((error) => {
            messages.push(error.msg);
        });
        console.log(messages);
        req.flash("error", messages);
        return res.redirect("/blogs/");
    }
    next();
};
const validateContactUs = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        var messages = [];
        errors.array().forEach((error) => {
            messages.push(error.msg);
        });
        console.log(messages);
        req.flash("error", messages);
        return res.redirect("/blogs/contact-us");
    }
    next();
};
module.exports = {
    userSignInValidationRules,
    userContactUsValidationRules,
    postBlogValidationRules,
    deleteValidationRules,
    updateValidationRules,
    searchValidationRules,
    validatePost,
    validateUpdate,
    validateSearch,
    validateDelete,
    validateSearch,
    validateSignin,
    validateContactUs,
};
