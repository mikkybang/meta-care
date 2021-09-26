const swapi = require("swapi-node");

const { getCommentCount } = require("../comment");

const getAll = async () => {
  const movies = await swapi.getFilm();
  console.log(movies.results[0].characters);
  const sortedMovies = movies.results.sort(
    (a, b) => b.release_date - a.release_date
  );
  const resultPromise = sortedMovies.map(async (movie) => {
    const comment_count = await getCommentCount({
      episode_id: movie.episode_id,
    });
    return {
      opening_crawl: movie.opening_crawl,
      comment_count,
      release_date: movie.release_date,
    };
  });

  const result = await Promise.all(resultPromise);
  console.log(result);
  return result;
};

const getOne = async (episode_id) => {};

const getCharacters = async (episode_id) => {
  const movies = await swapi.getFilm();

  const foundMovie = movies.results.find(
    (movie) => movie.episode_id === episode_id
  );

  console.log(foundMovie);
};

module.exports = {
  getAll,
  getOne,
  getCharacters,
};
