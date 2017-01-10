var express = require('express');
var router = express.Router();

//Loading routes controller/handlers
var registerCtrl = require('../controllers/registerController.js');
var loginCtrl = require('../controllers/loginController.js'); 

router
    .route('/register')
    .post(registerCtrl.register);

router
    .route('/login')
    .post(loginCtrl.login);

module.exports = router;