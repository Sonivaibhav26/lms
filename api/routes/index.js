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
    .post(loginCtrl.authenticate,userCtrl.createUser);

router
    .route('/user/:id')
    .delete(loginCtrl.authenticate,userCtrl.deleteUser);

router
    .route('/book')
    .post(loginCtrl.authenticate,bookCtrl.createBook);

router
    .route('/book/:id')
    .get(loginCtrl.authenticate,bookCtrl.updateBookStatus)
    .delete(loginCtrl.authenticate,bookCtrl.deleteBook);

module.exports = router;