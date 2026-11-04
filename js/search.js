import api from "./api.js";
import createMovieCard from "./ui.js";
import addMoviesToList from "./main.js";

const movieCards = document.querySelector(".movie-cards");

const filterMovies = async (searchContent) => {
  const query = searchContent.value.trim();

  if (query.trim() === "") {
    addMoviesToList();
  }

  const movies = await api.searchMovie(query);

  movieCards.innerHTML = "";

  movies.results.forEach((movie) => {
    if(movie.overview.length === 0 || movie.poster_path === null) {
      return;
    }
    const movieToAdd = {
      title: movie.original_title,
      year: movie.release_date?.slice(0, 4) || "N/A",
      poster: movie.poster_path
        ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
        : "",
      synopsis: movie.overview,
      rating: Number(movie.vote_average.toFixed(1)),
    };

    createMovieCard(movieToAdd);
  });
};

export default filterMovies;