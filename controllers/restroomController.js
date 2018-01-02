const db = require('../models');

module.exports = {
  findAll: (req, res) => {
    db.Restroom
      .find({})
      .populate('comment')
      .then(dbModel => res.send(dbModel))
      .catch(err => res.json(err));
  },
  create: (req, res) => {
    console.log('req', req.body);
    db.Restroom
      .create(req.body)
      .then(dbModel => console.log(dbModel))
      // .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  }
};
