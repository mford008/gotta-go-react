const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RestroomSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  location: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: String
  },
  comment: [{
    type: Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  createdAt: {
    type: Date,
    default: Date.Now
  },
  rating: {
    type: Number
  },
  verified: {
    type: Boolean,
    default: false
  },
  hours: {
    type: String
  }
});

const Restroom = mongoose.model('Restroom', RestroomSchema);

module.exports = Restroom;
