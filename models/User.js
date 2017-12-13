const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
