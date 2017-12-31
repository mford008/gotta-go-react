const db = require('../models');

module.exports = {
  findAll: (req, res) => {
    db.Comments
      .find({})
      // .populate('comments')
      // for some reason trying to populate the comments throws an error when
      // trying to send to the frontend so I'll leave it commented for now
      .then(dbModel => res.send(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    db.Comments
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
