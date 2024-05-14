const express = require('express');
const UserController = require('../controller/userController')
const router = express.Router();

router
    .post('/', UserController.login)
    .post('/register', UserController.register)

module.exports = router;