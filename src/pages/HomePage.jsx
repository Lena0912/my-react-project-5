import { useEffect, useState } from "react";
import { MovieList } from "../components/MovieList/MovieList";
import { fetchTrendigMovies } from "../tmdbApi";

import { Link } from "react-router-dom";

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendigMovies()
      .then(setMovies)
      .catch((err) => console.error("Error fetching trending movies", err));
  }, []);

  return (
    <>
      <button>Home</button>
      <Link to="/movies">
        <button>Movies</button>
      </Link>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </>
  );
};
