const express = require("express");
const router = express.Router();
const bookRoutes = require("./book");
const memberRoutes = require("./member");
router.use("/book", bookRoutes);
router.use("/member", memberRoutes);

module.exports = router;