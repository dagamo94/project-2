
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');

// USE INDEX.HTML
const db = require('./models');

const app = express();

// PASSPORT CONFIG
require('./config/passport')(passport);

const PORT = process.env.PORT || 8080;

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// BODYPARSER
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// FOR PASSPORT USING EXPRESS SESSION
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true })); // session secret
// PASSPORT MIDDLEWARE
app.use(passport.initialize());
app.use(passport.session());

// CONNECT FLASH
app.use(flash());

// GLOBAL VARS
app.use((err, req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    console.log(err);
    next();
});
// ROUTES
app.use('/', require('./routes/router.js'));
app.use('/users', require('./routes/users.js'));



db.sequelize.sync().then(function () {
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
}).catch(function (err) {
    console.log(err, "Something went wrong updating the Database");

// Dependencies
var express = require("express");

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