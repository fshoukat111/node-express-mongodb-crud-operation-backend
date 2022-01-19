const express = require("express");
const router = express.Router();
const article = require('../controllers/article.controller.js');

// Get Articles Route
router.route('/article').get(article.getArticles);

// Create Article Route
router.route('/article/create').post(article.createArticle);

// Update and Delete Article Route

router.route('/article/:id').put(article.updateArticle).delete(article.deleteArticle);

module.exports = router;