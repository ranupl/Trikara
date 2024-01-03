const express = require("express");
const router = express.Router();
const directoryController = require("../controllers/directoryController");

router.post("/listDirectories", directoryController.Directories);

module.exports = router;
