const db = require('../models');

module.exports = {
  create: (req,res) => {
    console.log('req',req.body)
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err))
  }
}
