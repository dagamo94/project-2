const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const flash = require('connect-flash');
const passport = require('passport');


// USER MODEL
const db = require('../models')

// LOGIN PAGE
router.get('/login', (req, res) => res.render('login'));

// RGISTRATION PAGE
router.get('/register', (req, res) => res.render('register'));

// REGISTER HANDLE
router.post('/register', (req, res) => {
    const { name, lastname, username, email, password, password2 } = req.body;
    let errors = [];

    // CHECK REQUIRED FIELDS
    if (!name || !lastname || !username || !email || !password || !password2) {
        errors.push({ msg: "Please fill in all fields" });
    }

    // CHECK PASSWORDS MATCH
    if (password !== password2) {
        errors.push({ msg: "Passwords do not match" });
    }

    // CHECK PASSWORD LENGTH
    if (password.length < 6) {
        errors.push({ msg: "Password must be at least 6 characters" });
    }

    if (errors.length > 0) {
        res.render('register', {
            errors, name, lastname, username, email, password, password2
        });
    } else {
        //  VALIDATION PASSED
        db.Member.findOne({
            where: {
                email: email
            }
        }).then(user => {
            if (user) {
                // USER EXISTS
                errors.push({ msg: "Email is already in use" });
                res.render('register', {
                    errors, name, lastname, username, email, password, password2
                });
            } else {
                // HASH PASSWORD
                var hashedPassword = "";
                bcrypt.genSalt(10, (err, salt) => bcrypt.hash(password, salt, (err, hash) => {
                    if(err) throw err;

                    hashedPassword = hash;
                    // CREATE NEW USER/MEMBER IN MYSQL DATABASE
                    db.Member.create({
                        firstname: name,
                        lastname: lastname,
                        username: username,
                        email: email,
                        password: hashedPassword
                    }).then(function (member) {
                        req.flash('success_msg', 'You are now  registered and can now log in');
                        console.log(member);
                        res.redirect('/users/login');
                    }).catch(err => console.log(err));              
                }));
            }
        });
    }

    // console.log(req.body);
});

// LOGIN HANDLE
router.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/asd',
    failureFlash: true
}) ,(req, res, next) => {
   (req, res, next);
   res.redirect('/dashboard/' + req.user.email);
   console.log("redirected + user: ", req.user.email);
});

// LOGOUT HANDLE
router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/users/login');
});

module.exports = router;