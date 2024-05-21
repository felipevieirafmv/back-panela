const mongoose = require('mongoose');

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
                qtd: {
                    type: String,
                    required: true
                },
                ingredient: {
                    type: String,
                    required: true
                }
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
    })
);

module.exports = Recipe;
