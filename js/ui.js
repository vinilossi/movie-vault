const movieCards = document.querySelector(".movie-cards");

function createMovieCard(movie) {
  const movieCard = document.createElement("section");
  movieCard.classList.add("movie-card");

  const movieInfo = document.createElement("div");
  movieInfo.classList.add("movie-info");

  const posterContainer = document.createElement("div");
  posterContainer.classList.add("movie-info__poster");

  const poster = document.createElement("img");
  poster.classList.add("movie-info__poster_img");
  poster.src = movie.poster;
  poster.alt = `Poster of the ${movie.title} movie`;

  posterContainer.appendChild(poster);

  const movieMetadata = document.createElement("div");
  movieMetadata.classList.add("movie-info__metadata");

  const title = document.createElement("p");
  title.classList.add("movie-info__metadata_title");
  title.textContent = `${movie.title} (${movie.year})`;

  movieMetadata.appendChild(title);

  const ratingContainer = document.createElement("div");
  ratingContainer.classList.add("movie-info__metadata_rating");

  const starRating = document.createElement("div");
  starRating.classList.add("movie-info-star-rating");

  const starIcon = document.createElement("img");
  starIcon.classList.add("rate-icon");
  starIcon.src = "img/Star.svg";
  starIcon.alt = "star icon";

  const rating = document.createElement("p");
  rating.textContent = movie.rating;

  starRating.appendChild(starIcon);
  starRating.appendChild(rating);

  const favoriteContainer = document.createElement("div");
  favoriteContainer.classList.add("movie-info-favorite-add");

  const heartIcon = document.createElement("img");
  heartIcon.classList.add("rate-icon");
  heartIcon.src = "img/Heart.svg";
  heartIcon.alt = "heart icon";

  const favoriteText = document.createElement("p");
  favoriteText.textContent = "Favorite";

  favoriteContainer.appendChild(heartIcon);
  favoriteContainer.appendChild(favoriteText);

  ratingContainer.appendChild(starRating);
  ratingContainer.appendChild(favoriteContainer);

  movieMetadata.appendChild(ratingContainer);

  movieInfo.appendChild(posterContainer);
  movieInfo.appendChild(movieMetadata);

  const synopsisContainer = document.createElement("div");
  synopsisContainer.classList.add("movie-info__synopsis");

  const movieSynopsis = document.createElement("p");
  movieSynopsis.classList.add("movie-info__synopsis_text");
  movieSynopsis.textContent = movie.synopsis;

  synopsisContainer.appendChild(movieSynopsis);

  movieCard.appendChild(movieInfo);
  movieCard.appendChild(synopsisContainer);

  movieCards.appendChild(movieCard);
}

export default createMovieCard;