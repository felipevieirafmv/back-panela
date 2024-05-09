const bodyParser = require('body-parser');
const challenge = require('./challenge.js');

module.exports = (app) => {
    app.use(
        bodyParser.json(),
        challenge
    )
}