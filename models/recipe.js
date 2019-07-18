module.exports = function(sequelize, DataTypes) {// ** Makes the Recipe Model available for other files (will also create a table) 
  // *TODO Creates a "Recipe" model that matches up with DB
  var Recipe = sequelize.define('Recipe', {
    // id: {
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: DataTypes.INTEGER
    // },
    id: {
      type: DataTypes.STRING,
      notEmpty: true,
      allowNull: false,
      validate: {
          notIn: [" "]
      }
  },
    recipeName: {
        type: DataTypes.STRING,
        notEmpty: true,
        allowNull: false,
        validate: {
            notIn: [" "]
        }
    },
    authorName: {
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




module.exports = function (sequelize, DataTypes) {
  var Member = sequelize.define('Member', {
      // id: {
      //     autoIncrement: true,
      //     primaryKey: true,
      //     type: DataTypes.INTEGER
      // },
      firstname: {
          type: DataTypes.STRING,
          notEmpty: true,
          allowNull: false,
          validate: {
              notIn: [" "]
          }
      },
      lastname: {
          type: DataTypes.STRING,
          notEmpty: true,
          allowNull: false,
          validate: {
              notIn: [" "]
          }
      },
      username: {
          type: DataTypes.TEXT,
          notEmpty: true
      },
      email: {
          type: DataTypes.STRING,
          validate: {
              isEmail: true
          }
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              len: [6]
          }
      },
      last_login: {
          type: DataTypes.DATE
      },
      status: {
          type: DataTypes.ENUM('active', 'inactive'),
          dafaultValue: 'active'
      }

  });

  return Member;
}


// 