var mongoose = require('mongoose');
var adminUser = mongoose.model('adminUser');
var bcrypt = require('bcrypt-nodejs');

module.exports.register = function (req, res) {
    console.log('registering user');

    var username = req.body.username;
    var name = req.body.name;
    var password = req.body.password;
    var email = req.body.email;
    var contactNo = req.body.contactNo;

    adminUser.create({
        username: username,
        name: name,
        email:email,
        contactNo:contactNo,
        password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    }, function (err, user) {
        if (err) {
            console.log(err);
            res.status(400).json(err);
        } else {
            console.log('admin created', user);
            res.status(201).json(user);
        }
    });
};