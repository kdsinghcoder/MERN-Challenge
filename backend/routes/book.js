const express = require("express");
const router = express.Router();
const bookControllers = require("../controllers/books");

router.get("/", bookControllers.getBooks);
router.post("/add", bookControllers.addBook);

module.exports = router;