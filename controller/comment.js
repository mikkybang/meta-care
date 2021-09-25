const { create } = require("../services/comment");

const createController = async (req, res, next) => {
  try {
    const data = {
      ip_address: req.ip,
      ...req.body,
    };

    const result = await create(data);
    res.status(200).json({
      result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createController,
};
