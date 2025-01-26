import { useState } from "react";
import { MovieList } from "../components/MovieList/MovieList";
import { searchMovies } from "../tmdbApi";
import { Link } from "react-router-dom";

export const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = () => {
    searchMovies(query)
      .then(setMovies)
      .catch((error) => console.error("Error searching movies:", error))
      .reset("");
  };
  return (
    <>
      <h1>Search Movies</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter movie title"
      />
      <button onClick={handleSearch}>Search</button>
      <MovieList movies={movies} />
      <Link to="/">Go Back Home</Link>
    </>
  );
};
