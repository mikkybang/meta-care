const express = require("express");

const {
  getAllController,
  getCharactersController,
  getOneController,
} = require("../controller/movies");

const router = express.Router();

router.get("/", getAllController);
router.get("/character/:episode_id", getCharactersController);
router.get("/episode/:episode_id", getOneController);

module.exports = router;
