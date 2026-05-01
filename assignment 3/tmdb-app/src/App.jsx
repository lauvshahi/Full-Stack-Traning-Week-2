import { useEffect, useState } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("Batman");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  const fetchMovies = async (query) => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();

      setMovies(data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const searchMovies = () => {
    if (search.trim() === "") {
      setError("Please enter movie name");
      return;
    }

    fetchMovies(search);
  };

  useEffect(() => {
    fetchMovies(search);
  }, []);

  return (
    <div className="container">
      <h1 className="title">
        TMDB Movie App
      </h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
        searchMovies={searchMovies}
      />

      {loading && <Loading />}

      {error && <ErrorMessage error={error} />}

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
}

export default App;