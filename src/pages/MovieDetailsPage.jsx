
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { fetchMovieDetails, IMAGE_BASE_URL } from "../tmdbApi";
import MovieCast from "../components/MovieCast";
import { MovieReviews } from "../components/MovieReviews";

 

export const MoviesDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  // Дізнаємося, звідки користувач прийшов (якщо є)
  const backLink = location.state?.from || "/movies";
  const query = location.state?.query || "";

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(setMovie)
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <>
      <Link to={backLink} state={{query}}>Go Back</Link>
      <h1>{movie.title}</h1>
      <img
        src={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : "/placeholder.jpg"}
        alt={`${movie.title} poster`}
        style={{ width: "300px", borderRadius: "8px" }}
      />
      <p>Popularity: {movie.popularity}</p>
      <p>Original language: {movie.original_language}</p>
      <p>{movie.overview}</p>
      <p>Genres: {movie.genre_ids?.join(", ")}</p>
      <p>Release date: {movie.release_date}</p>
      
      <MovieCast />
      <MovieReviews />
    </>
  );
};


