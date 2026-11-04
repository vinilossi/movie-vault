import api from "./api.js";
import createMovieCard from "./ui.js";
import filterMovies from "./search.js";

const searchContent = document.querySelector("#search-movie");

searchContent.onchange = () => filterMovies(searchContent);

const movieCards = document.querySelector(".movie-cards");

async function addMoviesToList() {
  const popularMovies = await api.getMovies();

  popularMovies.results.forEach((movie) => {
    const movieToAdd = {
      title: movie.original_title,
      year: movie.release_date.slice(0, 4),
      poster: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
      synopsis: movie.overview,
      rating: Number(movie.vote_average.toFixed(1)),
    };
    createMovieCard(movieToAdd);
  });
};

addMoviesToList();

export default addMoviesToList;
    const movieToAdd = (
      {
        title: movie.original_title,
        year: movie.release_date.slice(0, 4),
        poster: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
        synopsis: movie.overview,
        rating: Number(movie.vote_average.toFixed(1))
      }
    )
    createMovieCard(movieToAdd)
  }) 
}

addMoviesToList();

movies.forEach((movie) => createMovieCard(movie));
