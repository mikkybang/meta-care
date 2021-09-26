const { Comment } = require("../../db");

const get = async (query) => {
  const comments = await Comment.findAll({
    where: query,
    order: [["createdAt", "DESC"]],
  });

  return comments;
};

const getOne = async (query) => {
  const comment = await Comment.findOne({
    where: query,
  });

  return comment;
};

const getCommentCount = async (query) => {
  const count = await Comment.count({
    where: query,
    raw: true,
  });

  return count;
};

module.exports = {
  get,
  getOne,
  getCommentCount
};
