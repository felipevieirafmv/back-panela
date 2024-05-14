const bodyParser = require('body-parser');
const user = require('./user.js');
const recipe = require('./recipe.js');

module.exports = (app) => {
    app.use(
        bodyParser.json(),
        user,
        recipe
    )
}