const Article = require('../models/article.model');

exports.createArticle = async (req, res) => {
    const article = await Article.create(req.body);
    res.status(200).json({
        success: true,
        article
    })
};

exports.getArticles = async (req, res) => {
    const articles = await Article.find();
    res.status(200).send(articles);
};

exports.updateArticle = async (req, res) => {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    res.status(200).send(article);

};

exports.deleteArticle = async (req, res) => {
    const article = await Article.findByIdAndDelete(req.params.id);
    res.send(article);
};