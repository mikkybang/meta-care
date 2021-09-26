const express = require("express");

const { getAllController } = require("../controller/movies");

const router = express.Router();

router.get("/", getAllController);

module.exports = router;
