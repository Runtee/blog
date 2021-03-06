const Blog = require("../models/blog");

module.exports = {
    blogRender: (req, res) => {
        var content = Blog.find({ title: req.params.title });
        res.render("blogPage", {
            content,
        });
    },
    blogWrite:(req, res) => {
        res.render("blogWrite", {
        });
    },
    blogPost: (req, res) => {
        const body = req.body;
        Blog.create(body, (er, blog) => {
            if (blog) {
                return res.redirect("/");
            } else {
                throw er;
            }
        });
    },
    home: (req, res) => {
        var content = Blog.find();
        res.render("index", {
            content,
        });
    },
    search: (req, res) => {
        var content = Blog.find({
            $text: {
                $search: content
            }
        }, {
            score: {
                $meta: 'textScore'
            }
        }).sort({
            score: {
                $meta: 'textScore'
            }
        });
        return res.render("index", {
            content,
        });
    },
    blogDelete:(req, res) => {
        res.render("delete", {
        });
    },
    deletePost: (req, res) => {
        var body = req.body
        var content = Blog.findOneAndDelete({ id: body.id });
        res.render("index", {
        });
    },
    blogUpdate:(req, res) => {
        res.render("update", {
        });
    },
    update: (req, res) => {
        const updates = req.body
        var content = Blog.findOneAndUpdate({ id: updates.id }, updates);

        res.render("index", {
        });
    }
};
