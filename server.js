// Dependencies
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');

// USE INDEX.HTML
const db = require('./models');

const app = express();

// PASSPORT CONFIG
// require('./config/passport')(passport);

const PORT = process.env.PORT || 8080;


// STATIC DIRECTORY
//app.use(express.static("/public"));
//app.use(express.static(__dirname + '/public'));
var path = require("path");
app.use(express.static(path.join(__dirname + '/public')));


// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

// BODYPARSER
app.use(express.urlencoded({ extended: true }));
app.use(express.json());





// FOR PASSPORT USING EXPRESS SESSION
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true })); // session secret

// PASSPORT MIDDLEWARE
// app.use(passport.initialize());
// app.use(passport.session());

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


app.get('*', function (req, res) {
    res.send('/', 404);
});


// //Sets Handlebars 
// var exphbs = require("express-handlebars");
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// Import routes and give the sever access to them     NEEDED????
var routes = require("./controllers/recipeController.js")
app.use(routes);

// Routes
require("./routes/api-routes.js")(app);


//require("./routes/html-routes.js")(app);

db.sequelize.sync().then(function () {
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
}).catch(function (err) {
    console.log(err, "Something went wrong updating the Database");

});



