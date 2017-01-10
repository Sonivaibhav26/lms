var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.createUser = function (req, res) {
    console.log('registering user');

    var username = req.body.username;
    var name = req.body.name;
    var email = req.body.email;
    var contactNo = req.body.contactNo;

    User.create({
        username: username,
        name: name,
        email:email,
        contactNo:contactNo,
    }, function (err, user) {
        if (err) {
            console.log(err);
            res.status(400).json(err);
        } else {
            console.log('user created', user);
            res.status(201).json(user);
        }
    });
};

module.exports.deleteUser = function (req, res) {
    console.log('deleting User');

    var id = req.params.id;

    User.findByIdAndRemove({
        _id: id,
    }, function (err, user) {
        if (err) {
            console.log(err);
            res.status(400).json(err);
        } else {
            console.log('User deleted');
            res.status(202).json({});
        }
    });
};