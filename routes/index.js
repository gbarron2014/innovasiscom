var express = require('express');
var router = express.Router();

/* Ruta nueva al Home*/
router.get('/', function(req, res, next) {
    res.render('index', { page: 'Home', menuId: 'home' });
});

/* Ruta nueva al Ubicación*/
router.get('/ubicacion', function(req, res, next) {
    res.render('pages/ubicacion', { page: 'Ubicación', menuId: 'ubicacion' });
});

/* Ruta GET login . */
router.get('/logina', function(req, res, next) {
    res.render('login', {
        page: 'Login page',
        menuId: 'home',
        message: req.flash('loginMessage')
    });
});

/* Ruta GET login . */
router.get('/acercade', function(req, res, next) {
    res.render('acercade', {
        page: 'Acerca de page',
        menuId: 'acerca',
        message: req.flash('acercaMessage')
    });
});

/* Ruta GET SignUp . */
router.get('/signup', function(req, res) {
    res.render('signup', {
        page: 'Signup Page',
        menuId: 'home',
        message: req.flash('signupMessage')
    });
});

module.exports = router;