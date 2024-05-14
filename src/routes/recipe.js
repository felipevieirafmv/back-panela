const express = require('express');
const RecipeController = require('../controller/recipeController')
const router = express.Router();

router
    .get('/', RecipeController.getByUser)
    .post('/create', RecipeController.create)
    .put('/update', RecipeController.updateById)
    .delete('/delete', RecipeController.deleteById)

module.exports = router;
