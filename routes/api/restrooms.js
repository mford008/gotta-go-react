const router = require('express').Router();
const restroomController = require('../../controllers/restroomController');

// Matches with '/api/restrooms'
router.route('/')
  .get(restroomController.findAll)
  .post(restroomController.create);

module.exports = router;
