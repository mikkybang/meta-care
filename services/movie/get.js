const swapi = require("swapi-node");

const { getCommentCount } = require("../comment");

const getAll = async () => {
  const movies = await swapi.getFilm();
  console.log(movies);

  const sortedMovies = movies.sort((a, b) => b.release_date - a.release_date);
  console.log(sortedMovies);
};

module.exports = {
  getAll,
};
