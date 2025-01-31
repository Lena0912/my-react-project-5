import { useLocation } from "react-router-dom";
import { IMAGE_BASE_URL } from "../../tmdbApi";
import { MovieItem, MovieLink, MoviePoster, Movies } from "./MovieList.style";

export const MovieList = ({ movies}) => {
  const location = useLocation();

  return (
    <Movies>
      
      {movies.map((movie) => (
        <MovieItem key={movie.id}>
          <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
            <MoviePoster
              src={
                movie.poster_path
                  ? `${IMAGE_BASE_URL}${movie.poster_path}`
                  : "/placeholder.jpg"
              }
              alt={`${movie.title} poster`}
            />
            <h2>{movie.title}</h2>
          </MovieLink>
        </MovieItem>
      ))}
      
        
    </Movies>
  );
};