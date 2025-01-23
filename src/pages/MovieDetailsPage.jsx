import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../tmdbApi";

 

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
      <p>{movie.overview}</p>
      <p>Release date: {movie.release_date}</p>
    </>

  );
    
};


