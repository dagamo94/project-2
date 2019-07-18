var express = require("express");

var router = express.Router();

// ** Import the model (recipe.js) to use it's database functions.
var db = require("../models");

// ** Create all our routes and set up logic within those routes where required.
<<<<<<< HEAD
router.get("/", function (req, res) {
    res.render("index");
});

router.post("/api/recipes", function (req, res) {
    db.Recipe.create([
        "recipe_name", "ingredients"
    ], [
        req.body.recipe_name, req.body.ingredients
    ], function (result) {
        // ** Send back the ID of the new 
        res.json({
            id: result.insertID
        });
    });
});

// ** To delete a recipe
router.delete("/api/recipes/:id", function (req, res) {
=======
router.get("/", function(req, res) {
    res.render("index");
});

router.get('/recipes/indRecipe', function(req, res){
    res.send("create 'indRecipe.ejs' file to render");
});

router.get('/recipes/create', function(req, res){
    res.send("create 'createRecipe.ejs file to render");
});

router.post("/recipe/create", function(req, res) {
    db.Recipe.create(req.body).then(function(data) {
        res.json(data);
    })
});

router.get("/recipes/viewall", function(req, res){
    res.send("create 'viewAll.ejs' file to render");
});

// ** To delete a recipe
router.delete("/recipe/delete/:id", function(req, res) {
>>>>>>> 6d2a66ae4ce788e9c93fce6889c6b8bfda89de57
    var condition = "id = " + req.params.id;

    recipe.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            // */ If no rows were changed then the ID must not exist
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.get('/recipes/indRecipe', function (req, res) {
    res.render("indRecipe");
});
// Export routes for server.js to use





module.exports = router;

