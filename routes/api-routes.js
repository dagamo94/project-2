// Dependencies
var db = require("../models");

// Routes
module.exports = function(app) { 

    //GET - route for getting all of the recipes
    app.get("/api/recipes/", function(req, res) {
        db.Recipe.findAll({})
            .then(function(dbRecipe) {
                res.json(dbRecipe);
            });
    });

    // GET - route for returning recipes of a specific category
    // app.get("/api/recipes/category/:category", function(req, res) {
    //     db.Recipe.findAll({
    //         where: {
    //             category: req.params.category
    //         }
    //     })
    //     .then(function(dbRecipe) {
    //         res.json(dbRecipe);
    //       });
    // });

    // GET - route for retrieving a single recipe
    app.get("/api/recipes/:recipe", function(req, res) {
        db.Recipe.findOne({
            where: {
                id: req.params.recipe
            }
        })
        .then(function(dbRecipe) {
            res.json(dbRecipe);
        });
    });

    // POST - route for saving a new recipe
    app.post("/api/recipes", function(req, res) {
        console.log(req.body);
        db.Recipes.create({
            recipe_name: req.body.recipe_name,
            ingredients: req.body.ingredients
        })
        .then(function(dbRecipe) {
            res.json(dbRecipe);
        });
    });

    // DELETE - route for deleting recipes
    app.delete("/api/recipes/:id", function(req, res) {
        db.Recipe.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function(dbRecipe) {
            res.json(dbRecipe);
        });
    });

    //PUT - route for updating recipes
    app.put("/api/recipes", function(req, res) {
        db.Recipe.update(req.body,
            {
                where: {
                    id: req.body.id
                }
            })
            .then(function(dbRecipe) {
                res.json(dbRecipe);
            });
    });
};