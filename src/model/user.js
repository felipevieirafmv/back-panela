const mongoose = require('mongoose');

const User = mongoose.model('User', 
    new mongoose.Schema({
        name: {
            type: String,
            required: true,
            minLength: 3
        },
        email: {
            type: String,
            required: true,
            minlength: 6
        },
        password: {
            type: String,
            required: true,
            minlength: 6
        },
        adm: {
            type: Boolean,
            required: false,
            default: false
        }
    })
)

module.exports = User;
