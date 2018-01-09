const router = require('express').Router();
const userRoutes = require('./user');

router.use('./auth', userRoutes);

module.exports = router;
