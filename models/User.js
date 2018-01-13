const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  local: {
    userName: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },
    password: {
      type: String,
      trim: true,
      required: true
    }
  }
});

UserSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.local.password);
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
};

UserSchema.pre('save', function (next) {
  if (!this.local.password) {
    console.log('you shall not poop!!');
    next();
  } else {
    this.local.password = this.hashPassword(this.local.password);
    next();
  }
});

UserSchema.pre('update', function (next) {
  if (!this.local.password) {
    console.log('no password');
    next();
  } else {
    this.local.password = this.hashPassword(this.local.password);
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
