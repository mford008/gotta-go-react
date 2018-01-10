const db = require('../models');

module.exports = {
  create: (req, res) => {
    console.log('req', req.body);
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
<<<<<<< HEAD
      .catch(err => res.json(err));
=======
      .catch(err => res.status(422).json(err))
>>>>>>> 082f71734be195c32b9dffb7c0d8ecac478ec82c
  }
};
