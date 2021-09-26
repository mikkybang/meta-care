const swapi = require("swapi-node");

const { getCommentCount } = require("../comment");

const getAll = async () => {
  const movies = await swapi.getFilm();
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
  return result;
};

const getOne = async (episode_id) => {
  const movies = await swapi.getFilm();

  const foundMovie = movies.results.find(
    (movie) => movie.episode_id == episode_id
  );
  const comment_count = await getCommentCount({
    episode_id,
  });

  const result = {
    opening_crawl: foundMovie.opening_crawl,
    comment_count,
    release_date: foundMovie.release_date,
  };

  return result;
};

const getCharacters = async (
  episode_id,
  sortBy = "name",
  order = "desc",
  filter = null
) => {
  const movies = await swapi.getFilm();
  const foundMovie = movies.results.find(
    (movie) => movie.episode_id == episode_id
  );
  const charactersPromise = foundMovie.characters.map(async (link) => {
    const id = link.split("/")[5];
    const charaterDetails = await swapi.getPerson(id);
    return charaterDetails;
  });
  let characters = await Promise.all(charactersPromise);
  if (
    filter &&
    (filter === "male" || filter === "female" || filter === "n/a")
  ) {
    characters = characters.filter(
      (characterDetails) => characterDetails.gender == filter
    );
  }

  const result = characters.sort((a, b) => {
    if (order === "desc") {
      if (a[sortBy] > b[sortBy]) return -1;
      if (a[sortBy] < b[sortBy]) return 1;
      return 0;
    } else if (order === "asc") {
      if (a[sortBy] > b[sortBy]) return 1;
      if (a[sortBy] < b[sortBy]) return -1;
      return 0;
    } else {
      throw new Error("Wrong Order format");
    }
  });

  const totalHeight = result.reduce(function (acc, obj) {
    return acc + obj.height;
  }, 0);

  const metadata = {
    total_characters: result.length,
    total_height_cm: totalHeight,
  };

  return { characters: result, metadata };
};

module.exports = {
  getAll,
  getOne,
  getCharacters,
};
