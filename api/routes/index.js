var express = require('express');
var router = express.Router();

//Loading routes controller/handlers
var registerCtrl = require('../controllers/registerController.js'); 

router
    .route('/register')
    .post(registerCtrl.register);

module.exports = router;