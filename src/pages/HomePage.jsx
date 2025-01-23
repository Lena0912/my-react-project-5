import { useEffect, useState } from "react";
import { MovieList } from "../components/MovieList";
import { fetchTrendigMovies } from "../tmdbApi";

export const HomePage = () => {
    
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchTrendigMovies()
            .then(setMovies)
            .catch((err) => console.error("Error fetching trending movies", err));
    }, []);

    return (
        <>
            <h1>Popular Movies</h1>
            <MovieList movies={movies} />
        </>
    )
};
