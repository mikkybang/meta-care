const { getAll } = require("../services/movie");

const getAllController = async (req, res, next) => {
  try {
    const result = await getAll();
    res.status(200).json({
      result,
    });
    return;
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllController,
};
