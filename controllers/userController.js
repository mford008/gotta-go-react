const db = require('../models/');
const passport = require('../passport');

module.exports = {
  create: (req, res) => {
    console.log('usercontroller req', req.body);
    const { username, password } = req.body;
    db.User
      .findOne({ 'local.username': username}, (err,userMatch) => {
        if (userMatch) {
          return res.json({ error: "username taken"})
        }
        const newUser = new User({
          'local.username':username,
          'local.password': password
        })
        newUser.save((err, savedUser) => {
          if (err) return res.json(err)
          return res.json(savedUser)
        })
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  }
};
