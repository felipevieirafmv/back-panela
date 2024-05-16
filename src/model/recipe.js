const mongoose = require('mongoose');
const { userSchema } = require('./user');

const Recipe = mongoose.model('Recipe',
    new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3
    },
    description: {
        type: String,
        required: true,
        minlength: 10
    },
    ingredients: [
        {
            type: String,
            required: true
        },
        {
            type: String,
            required: true
        }
    ],
    prepare: [{
        type: String,
        required: true
    }],
    user: {
        type: String,
        required: true
    }
}));

module.exports = Recipe
