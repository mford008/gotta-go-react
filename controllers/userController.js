const db = require('../models');

module.exports = {
  create: (req, res) => {
    console.log('req', req.body);
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
<<<<<<< HEAD
      .catch(err => res.status(422).json(err))
=======
      .catch(err => res.json(err));
>>>>>>> alison
  }
};
