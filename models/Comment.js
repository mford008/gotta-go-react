const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  body: String,
  created: {
    type: Date,
    default: Date.now
  },
  location: Schema.Types.ObjectId // Need a way to associate each comment with correct location
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
