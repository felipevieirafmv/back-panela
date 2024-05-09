const express = require('express');
const challenge = require('../src/routes/challenge');

module.exports = function (app) {
    app.use(express.json());
    app.use('/challenge', challenge);
}