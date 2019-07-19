var express = require("express");

// var authController = require('../controllers/authcontroller.js');
var router = express.Router();

module.exports = function (passport) {

    router.get('/recipes/register', function(req,res){
        res.render('register'); 
    });

    router.get('/users/login', function(req,res){
        res.render('login'); 
    });

    router.post('/users/register', passport.authenticate('local-signup',
        {
            successRedirect: '/dashboard',
            failureRedirect: '/register'
        }
    ));

    router.get('/users/dashboard', isLoggedIn, function(req,res){
        res.render('dashboard'); 
    });

    router.get('/users/logout', function(req,res){
        req.session.destroy(function(err) {
        res.redirect('/');
        });
      });

    router.post('/users/login', passport.authenticate('local-signin',
        {
            successRedirect: '/users/dashboard',
            failureRedirect: '/users/login'
        }
    ));

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/users/login');
    }


}

