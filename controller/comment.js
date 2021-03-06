const requestIp = require("request-ip");

const { create, get, getOne } = require("../services/comment");

const createController = async (req, res, next) => {
  try {
    const ip_address = requestIp.getClientIp(req);
    const data = {
      ip_address,
      ...req.body,
    };

    const result = await create(data);
    res.status(200).json({
      result,
    });
    return;
  } catch (error) {
    next(error);
  }
};

const getCommentByEpisodeId = async (req, res, next) => {
  try {
    const query = {
      episode_id: req.params.episode_id,
    };
    const result = await get(query);
    res.status(200).json({
      result,
    });
    return;
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createController,
  getCommentByEpisodeId,
};
