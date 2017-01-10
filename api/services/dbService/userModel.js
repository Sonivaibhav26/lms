var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  contactNo: {
    type: Number,
    required: true
  }
});
 
module.exports = mongoose.model('User', userSchema);