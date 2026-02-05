const express = require("express");
const router = express.Router();
const testController = require("../controller/testController");

// GET /api/test
router.get("/", testController.getTestService);


module.exports = router;

