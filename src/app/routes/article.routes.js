module.exports = app => {
const article = require('../controllers/article.controller.js');
const express = require('express');
const router = express.Router();
router.post('/create',article.createArticle);
router.get('/',article.getArticles);
router.put('/:id',article.updateArticle);
router.delete('/:id',article.deleteArticle);
app.use('/api/article',router);
}