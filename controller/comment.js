const { create } = require("../services/comment");

const createController = async (req, res, next) => {
  try {
      console.log(req.ip)
    const data = {
      ip_address: '127.0.0.1',
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
