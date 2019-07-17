module.exports = function(sequelize, DataTypes) {// Makes the Recipe Model available for other files (will also create a table) 
  // Creates a "Recipe" model that matches up with DB
  var Recipe = sequelize.define("recipe", {
    name: DataTypes.STRING,
    ingrdients: DataTypes.STRING,
    type: DataTypes.STRING
    
  });
  
  // Syncs with DB
  //Recipe.sync();     // Don't think we need this???
  return Recipe;
}