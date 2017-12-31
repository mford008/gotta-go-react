const router = require('express').Router();
const restroomRoutes = require('./restrooms');
const commentRoutes = require('./comments');

router.use('/restrooms', restroomRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
