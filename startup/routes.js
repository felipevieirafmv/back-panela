const express = require('express');
const user = require('../src/routes/user');
const recipe = require('../src/routes/recipe');

module.exports = function (app) {
    app.use(express.json());
    app.use('/', user);
    app.use('/recipe', recipe);
}