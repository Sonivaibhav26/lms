var mongoose = require('mongoose');

var transactionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    date: { 
        type: Date, 
        default: Date.now
    },
    event: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Transaction', userSchema);