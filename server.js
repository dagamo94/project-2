const express = require('express');
const expressLayouts = require('express-ejs-layouts');
// var db = require('./models');

const app = express();

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//ROUTES
app.use('/', require('./routes/router'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 8080;

// db.sequelize.sync().then(function () {
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
// });