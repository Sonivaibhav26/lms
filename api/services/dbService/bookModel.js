var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  currentAvailabilityStatus: {
    type: Boolean,
    default:true,
  }
});
 
module.exports = mongoose.model('Book', bookSchema);