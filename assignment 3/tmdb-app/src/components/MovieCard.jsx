function MovieCard({ movie }) {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/300x450";

  return (
    <div className="movie-card">
      <img src={imageUrl} alt={movie.title} />

      <h3>{movie.title}</h3>

      <p className="date">
        Release: {movie.release_date}
      </p>

      <p className="overview">
        {movie.overview}
      </p>
    </div>
  );
}

export default MovieCard;