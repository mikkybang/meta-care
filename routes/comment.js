const express = require("express");

const {
  createController,
  getCommentByEpisodeId,
} = require("../controller/comment");

const router = express.Router();

router.post("/create", createController);
router.get("/episode/:episode_id", getCommentByEpisodeId);

module.exports = router;
