// Dependencies
var db = require("../models");

// Routes
module.exports = function(app) {

    //GET route for getting all of the posts
    app.get("/api/posts/", function(req, res) {
        db.Recipe.findAll({})
            .then(function(dbRecipe) {
                res.json(dbRecipe);
            });
    });

    // GET route for returning recipes of a specific category
    app.get("/api/posts/category/:category", function)
}