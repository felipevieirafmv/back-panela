const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    email: {
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

const User = mongoose.model("User", userSchema)

exports.User = User;
exports.userSchema = userSchema;