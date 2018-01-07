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
    let newLoo = {
      name: req.body.name,
      location: req.body.location,
      category: req.body.category,
      lat: req.body.lat,
      lng: req.body.lng
    };
    db.Restroom
      .create(newLoo)
      .then(
        db.Comment
        .create({
          body: req.body.comment
        })
        .then(console.log('comment added'))
      )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  }
};
