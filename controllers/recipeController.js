var express = require("express");

var router = express.Router();

// Import the model (recipe.js) to use it's database functions.
var burger = require("../models/recipe.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    recipe.all(function(data) {
        var hbsObject = {
            recipes: data
        }
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    recipe.create([
        "recipe_name", "ingredients"
    ], [
        req.body.recipe_name, req.body.ingredients
    ], function(result) {
        // Send back the ID of the new 
        res.json({ id: result.insertID });
    });
});

// To delete a recipe
router.delete("/api/recipes/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    recipe.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            // If no rows were changed then the ID must not exist
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use
module.exports = router;