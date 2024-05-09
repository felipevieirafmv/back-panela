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
    ingredients: {
        type: String,
        required: true,
        minlength: 10
    },
    prepare: {
        type: String,
        required: true,
        minlength: 10
    },
    user: {
        type: userSchema,
        required: true
    }
}));

module.exports = Recipe