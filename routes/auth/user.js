const router = require('express').Router();
const userController = require('../../controllers/userController');

router.route('/signup')
  .post(userController.create);

router.route('/login')
  .post(userController.check);

module.exports = router;
