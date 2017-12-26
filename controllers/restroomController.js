const db = require('../models');

module.exports = {
  findAll: (req, res) => {
    db.Restroom
      .find({})
      .populate('comments')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    db.Restroom
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};
