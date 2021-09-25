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

module.exports = {
  get,
  getOne,
};
