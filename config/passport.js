const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const express = require('express');

// LOAD USER MODEL AND SEQUELIZE
const db = require('../models')

module.exports = function (passport) {
    passport.use(
        new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
            db.Member.findOne({
                where: {
                    email: email
                }
            }).then(user => {
                if (!user) {
                    return done(null, false, { message: "Email is not registered" });
                }

                // MATCH PASSWORD
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) throw err;

                    if (isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, { message: "Incorrect Password" });
                    }
                });
            }).catch(err => console.log(err));
        })
    );

    passport.serializeUser(function (member, done) {
        done(null, member.id);
    });

    passport.deserializeUser(function (id, done) {
        db.Member.findById(id, function (err, user) {
            done(err, user);
        });
    });
}