var mongoose = require('mongoose');
var Book = mongoose.model('Book');

module.exports.createBook = function (req, res) {
    console.log('creating Book');

    var name = req.body.name;
    var author = req.body.author;

    Book.create({
        name: name,
        author: author
    }, function (err, user) {
        if (err) {
            console.log(err);
            res.status(400).json(err);
        } else {
            console.log('Book created', user);
            res.status(201).json(user);
        }
    });
};