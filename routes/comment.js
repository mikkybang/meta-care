const express = require("express");

const {
  createController,
} = require("../controller/comment");

const router = express.Router();

router.post("/create", createController);

module.exports = router;
