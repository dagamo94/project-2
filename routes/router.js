const express = require('express');
const router = express.Router();
const {ensureAuthenticated} = require('../config/auth')

router.get('/', (req, res) => res.render('welcome'));
router.get('/dashboard', (req, res) => res.render('dashboard'));

// DASHBOARD
// router.get('/dashboard', ensureAuthenticated, (req, res) => res.render('dashboard', {
//     name: req.body.name
// }));


module.exports = router;