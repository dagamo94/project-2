module.exports = function (sequelize, DataTypes) { // ** Makes the Recipe Model available for other files (will also create a table) 
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
            type: DataTypes.STRING,
            notEmpty: true
        },
        directions: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6]
            }
        },
        image: {
            type: DataTypes.STRING
        }
        // status: {
        //     type: DataTypes.ENUM('active', 'inactive'),
        //     dafaultValue: 'active'
        // }
    });
    
    return Recipe;
}