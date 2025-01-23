import { useState } from "react";
import { MovieList } from "../components/MovieList";
import { searchMovies } from "../tmdbApi";


export const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = () => {
    searchMovies(query)
      .then(setMovies)
      .catch((error) => console.error('Error searching movies:', error));
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
      <MovieList movies={movies}/>
    </>
  );
  
};
