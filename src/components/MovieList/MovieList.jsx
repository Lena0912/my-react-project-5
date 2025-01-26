import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from "../../tmdbApi";
import { MovieItem, Movies } from "./MovieList.style";

export const MovieList = ({ movies }) => (
  <Movies>
    {movies.map((movie) => (
      <MovieItem key={movie.id}>
        <Link to={`/movies/${movie.id}`}>
          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={`${movie.title} poster`}
            style={{ width: "100px", borderRadius: "8px" }}
          />
        </Link>
      </MovieItem>
    ))}
  </Movies>
);
