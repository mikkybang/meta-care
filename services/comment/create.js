const Joi = require("joi");

const { Comment } = require("../../db");

const create = async (data) => {
  const commentData = Joi.object({
    episode_id: Joi.number().min(1).max(6).required(),
    ip_address: Joi.string().required(),
    comment: Joi.string().max(500),
  });

  const { error, value } = commentData.validate(data);

  if (error) {
    throw new Error(error);
  }
  const comment = await Comment.create(value);
  return comment;
};

module.exports = {
  create,
};
