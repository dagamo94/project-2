var express = require("express");

var router = express.Router();

// ** Import the model (recipe.js) to use it's database functions.
var db = require("../models");

// ** Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
        res.render("index");
});

router.get('/recipes/indRecipe', function(req, res){
    res.render("indRecipe");
});

router.post("/api/recipes", function(req, res) {
    db.Recipe.create(req.body).then(function(data) {
        res.json(data);
    })
});

// ** To delete a recipe
router.delete("/api/recipes/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    recipe.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            // */ If no rows were changed then the ID must not exist
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use
module.exports = router;