var mongoose = require('mongoose');

var adminSchema = new mongoose.Schema({
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
  password: {
    type: String,
    required: true
  },
  contactNo: {
    type: Number,
    required: true
  }
});
 
module.exports = mongoose.model('adminUser', adminSchema);