const express = require("express");

const {
  getAllController,
  getCharactersController,
} = require("../controller/movies");

const router = express.Router();

router.get("/", getAllController);
router.get("/character/:episode_id", getCharactersController);

module.exports = router;
