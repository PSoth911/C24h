import express from 'express';

const route = express.Router();

route.get('/',getAllArticles);
route.get('/:id',getArticleById);
route.post('/',createArticle);
route.put('/:id',updateArticle);
route.delete('/:id',deleteArticle);

export default route;

