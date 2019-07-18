// Dependencies
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');

// USE INDEX.HTML
const db = require('./models');
const router = require('./controllers/recipeController');
const app = express();

// PASSPORT CONFIG
require('./config/passport')(passport);

const PORT = process.env.PORT || 8080;


// Statis directory
app.use(express.static("public"));

// BODYPARSER
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

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
app.use('/users', require('./controllers/users.js'));



// Import routes and give the sever access to them     NEEDED????
var routes = require("./controllers/recipeController.js")
app.use(routes);


db.sequelize.sync().then(function () {
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
}).catch(function (err) {
    console.log(err, "Something went wrong updating the Database");

});



