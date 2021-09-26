const { getAll, getCharacters, getOne } = require("../services/movie");

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

getCharactersController = async (req, res, next) => {
  try {
    const episodeId = req.params.episode_id;
    const result = await getCharacters(episodeId);
    res.status(200).json({
      result,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllController,
};
