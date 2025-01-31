import { useState } from "react";
import { MovieList } from "../components/MovieList/MovieList";
import { Link } from "react-router-dom";
import { Field, Formik, Form } from "formik";
import { searchMovies } from "../tmdbApi";
import { BiSearchAlt } from "react-icons/bi";

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  
  const handleSearch = async (values, actions) => {
    const query = values.query.trim();
    if (!query) return;

    try {
      const results = await searchMovies(query);
      setMovies(results);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
    actions.resetForm();
  };

  

  return (
    <>
      <h1>Search Movies</h1>
      <Formik initialValues={{ query: "" }} onSubmit={handleSearch}>
        {({ isSubmitting }) =>  (
        
        
        <Form>
          <Field name="query" type="text" placeholder="Enter movie title" />
          <button type="submit" disabled={isSubmitting}>
            <BiSearchAlt />
          </button>
        </Form>
        )}
      </Formik>
      <MovieList movies={movies} />
      <Link to="/">Go Back Home</Link>
    </>
  );
};
