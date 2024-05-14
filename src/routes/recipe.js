const express = require('express');
const RecipeController = require('../controller/recipeController')
const router = express.Router();

router
    .post('/', RecipeController.getByUser)
    .post('/create', RecipeController.create)
    .put('/update', RecipeController.updateRecipe)
    .delete('/delete', RecipeController.deleteRecipe)

module.exports = router;