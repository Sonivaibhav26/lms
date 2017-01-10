var express = require('express');
var router = express.Router();

//Loading routes controller/handlers
var registerCtrl = require('../controllers/registerController.js');
var loginCtrl = require('../controllers/loginController.js');
var userCtrl = require('../controllers/userController.js');
var bookCtrl = require('../controllers/bookController.js'); 

router
    .route('/register')
    .post(registerCtrl.register);

router
    .route('/login')
    .post(loginCtrl.login);

router
    .route('/user')
    .post(userCtrl.createUser);

router
    .route('/user/:id')
    .delete(userCtrl.deleteUser);

router
    .route('/book')
    .post(bookCtrl.createBook);

router
    .route('/book/:id')
    .get(bookCtrl.updateBookStatus)
    .delete(bookCtrl.deleteBook);

module.exports = router;