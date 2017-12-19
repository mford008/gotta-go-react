const router = require("express").Router();
const restroomRoutes = require("./restrooms");

// Book routes
router.use("/restrooms", restroomRoutes);

module.exports = router;
