// Dependencies
var express = require("express");

// Requiring our models for syncing    NEEDED??????
var db = require("./models");

// Gives a dynamic port or port 8080
var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Sets Handlebars 
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Statis directory   NEEDED????
app.use(express.static("public"));

// Import routes and give the sever access to them     NEEDED????
var routes = require("./controllers/recipeController.js")
app.use(routes);

// Routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
    });
});