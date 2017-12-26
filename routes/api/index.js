const router = require('express').Router();
const restroomRoutes = require('./restrooms');

router.use('/restrooms', restroomRoutes);

module.exports = router;
