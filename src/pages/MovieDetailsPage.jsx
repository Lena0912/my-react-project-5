
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMovieDetails, IMAGE_BASE_URL } from "../tmdbApi";
import MovieCast from "../components/MovieCast";
import { MovieReviews } from "../components/MovieReviews";

 

export const MoviesDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(setMovie)
      .catch((error) => console.error("Error fetching movie details:", error));    
  }, [movieId]);

  if(!movie) return <p>Loading...</p>

  return (
    <>
      <h1>{movie.title}</h1>
      <img
        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
        alt={`${movie.title} poster`}
        style={{ width: "300px", borderRadius: "8px" }}
      />
      <p>Popularity: {movie.popularity}</p>
      <p>Original language: {movie.original_language}</p>
      <p>{movie.overview}</p>
      <p>Genres: {movie.genre_ids}</p>
      <p>Release date: {movie.release_date}</p>
      <Link to="/movies">Go Back</Link>
      <MovieCast />
      <MovieReviews />
    </>
  );
    
};


