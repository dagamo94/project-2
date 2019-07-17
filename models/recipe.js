//model for recipe// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Recipe" model that matches up with DB
var Recipe = sequelize.define("recipe", {
  name: Sequelize.STRING,
  ingrdients: Sequelize.STRING,
  type: Sequelize.STRING

});

// Syncs with DB
Recipe.sync();

// Makes the Recipe Model available for other files (will also create a table)git 
module.exports = Recipe;
//

// ** Unit Test
// *! Do Not
// *? dow we need to do thiws 
// *TODO put in 