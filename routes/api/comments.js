const router = require('express').Router();
const commentController = require('../../controllers/commentController');

// Matches with '/api/restrooms'
router.route('/')
  .get(commentController.findAll)
  .post(commentController.create);

module.exports = router;
