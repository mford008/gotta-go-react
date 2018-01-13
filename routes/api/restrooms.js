const router = require('express').Router();
const restroomController = require('../../controllers/restroomController');

router.route('/')
  .get(restroomController.findAll)
  .post(restroomController.create);

router.route('/:id')
  .post(restroomController.updateComments);

module.exports = router;
