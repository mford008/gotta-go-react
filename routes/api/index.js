const router = require('express').Router();
const restroomRoutes = require('./restrooms');
const userRoutes = require('./user');
// const commentRoutes = require('./comments');

router.use('/restrooms', restroomRoutes);
router.use('/user', userRoutes);
// router.use('/comments', commentRoutes);

module.exports = router;
