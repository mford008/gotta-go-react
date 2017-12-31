const db = require('../models');

module.exports = {
  findAll: (req, res) => {
    // console.log('req:', req.body);
    db.Comments
      .find({})
      // .then(dbModel => console.log('res:', dbModel))
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
