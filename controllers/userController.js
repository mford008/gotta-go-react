const db = require('../models');
const bcrypt = require('bcryptjs');

module.exports = {
  create: (req, res) => {
    console.log('req', req.body);
    let newUser = {
      local: {
        userName: req.body.username,
        password: req.body.password
      }
    };
    console.log(newUser);
    db.User
      .create(newUser)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  check: (req, res) => {
    console.log('req', req.body);
    let username = req.body.username;
    let password = req.body.password;
    const check = function (uname, pass) {
      db.User.findOne({'local.userName': uname}, (err, userMatch) => {
        if (err) {
          console.log(err);
          return err;
        }
        if (!userMatch) {
          console.log('no such user');
          return res.send({user: 'username not found'});
        }
        if (!userMatch.checkPassword(pass)) {
          console.log('no match');
          return res.send({user: 'wrong password'});
        } else {
          console.log('match!!!');
          res.send({user: true});
        }
      });
    };
    check(username, password);
  },
  changePassword: (req, res) => {
    console.log('req.body:', req.body);
    let username = req.body.username;
    let password = req.body.password;
    let newPassword = req.body.newPassword;
    const update = function (uname, pass, newpass) {
      db.User.findOne({'local.userName': uname}, (err, userMatch) => {
        console.log(userMatch);
        if (err) {
          console.log(err);
          return err;
        }
        if (!userMatch) {
          console.log('no such user');
          return res.send({user: 'no user found'});
        }
        if (!userMatch.checkPassword(pass)) {
          console.log('no match');
          return res.send({user: 'wrong password'});
        } else {
          console.log('match!!!');
          userMatch.password = newpass;
          userMatch.save();
          console.log('password updated');
          return res.send({user: 'password changed'});
          // db.User.update(
          //   {'password': pass},
          //   {$set: {'password': userMatch.hashPassword(newpass)}},
          //   (err, callback) => {
          //     if (err) {
          //       console.log(err);
          //       return err;
          //     } else {
          //       console.log('password updated');
          //       return res.send({user: 'password changed'});
          //     }
          //   }
          // );
        }
      });
    };
    update(username, password, newPassword);
  }
};
