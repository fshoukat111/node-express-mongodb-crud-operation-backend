const Article = require('../models/article.model');
const cors = require('cors');
const corsOptions = {
	origin: "http://localhost:4200/article"
};

exports.createArticle = (req, res) => {
    // if (!req.body.title) {
    //     res.status(400).send({ message: "Content can not be empty!" });
    //     return;
    // }

    const article = new Article({
        title: req.body.title,
        articleDescription: req.body.articleDescription,
        // published: req.body.published ? req.body.published : false,
    });

    article.save().then((data) => {
        console.log(data);
        res.send(data);
    }).catch((err) => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Article."
        });
    });
};

exports.getArticles = (req, res) => {
    const title = req.query.title;
    const condition = title ? { title: { $regex: new RegExp(title), $options: 'i' } } : {};

    Article.find(condition).then((data) => {
        console.log("data get", data)
        res.send(data)
    }).catch((err) => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Article."
        });
    });
};

exports.updateArticle = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    const id = req.params.id;
    Article.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then((data) => {
        if (!data) {
            res.status(500).send({
                message: `Cannot update Article with id=${id}. Maybe Article was not found!`
            });
        }
        else res.send({
            message: "Article was updated successfully."
        })
    }).catch(err => {
        res.status(500).send({
            message: "Error updating Tutorial with id=" + id
        });
    });

};

exports.deleteArticle = (req, res) => {
    const id = req.params.id;
    Article.findByIdAndRemove(id, { useFindAndModify: false }).then((data) => {
        if (!data) {
            res.status(404).send({
                message: `Cannot update Article with id=${id}. Maybe Article was not found!`
            });
        }
        else res.send({
            message: "Article was deleted successfully."
        })
    }).catch(err => {
        res.status(500).send({
            message: "Error updating Tutorial with id=" + id
        });
    });
};