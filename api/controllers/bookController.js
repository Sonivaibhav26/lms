var mongoose = require('mongoose');
var Book = mongoose.model('Book');

module.exports.createBook = function (req, res) {
    console.log('creating Book');

    var name = req.body.name;
    var author = req.body.author;

    Book.create({
        name: name,
        author: author
    }, function (err, book) {
        if (err) {
            console.log(err);
            res.status(400).json(err);
        } else {
            console.log('Book created', book);
            res.status(201).json(book);
        }
    });
};

module.exports.deleteBook = function (req, res) {
    console.log('deleting Book');

    var id = req.params.id;

    Book.findByIdAndRemove({
        _id: id,
    }, function (err, book) {
        if (err) {
            console.log(err);
            res.status(400).json(err);
        } else {
            console.log('Book deleted');
            res.status(202).json({});
        }
    });
};