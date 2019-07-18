module.exports = function(sequelize, DataTypes) {// ** Makes the Recipe Model available for other files (will also create a table) 
  // *TODO Creates a "Recipe" model that matches up with DB
  var Recipe = sequelize.define('Recipe', {
    recipe_name: {
        type: DataTypes.STRING,
        notEmpty: true,
        allowNull: false,
        validate: {
            notIn: [" "]
        }
    },
    author_name: {
        type: DataTypes.STRING,
        notEmpty: true,
        allowNull: false,
        validate: {
            notIn: [" "]
        }
    },
    ingredients: {
        type: DataTypes.TEXT,
        notEmpty: true
    },
    measurements: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        }
    },
    Directions: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [6]
        }
    },
    image: {
        type: DataTypes.DATE
    },
    status: {
        type: DataTypes.ENUM('active', 'inactive'),
        dafaultValue: 'active'
    }
});

return Recipe;
}


