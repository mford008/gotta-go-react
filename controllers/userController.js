const db = require('../models');

module.exports = {
  create: (req, res) => {
    console.log('req', req.body);
    let newUser = {
      local: {
        userName : req.body.username,
        password : req.body.password
      }}
    console.log(newUser);
    db.User
      .create(newUser)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  check: (req,res) => {
    console.log('req', req.body);
    db.User
      .findOne({'local.userName' : req.body.username})
      .then(doc => console.log(doc))
      .catch(err => res.json(err))
  }

};
