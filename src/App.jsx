import { Route,  Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./pages/HomePage";
import { MoviesDetailsPage } from "./pages/MovieDetailsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { MoviesPage } from "./pages/MoviesPage";
import MovieCast from "./components/MovieCast";
import { MovieReviews } from "./components/MovieReviews";


const App = () => {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/movies" element={<MoviesPage/>} />
        <Route path="/movies/:movieId" element={<MoviesDetailsPage />} />
        <Route path="/movies/:movieId/cast" element={<MovieCast />} />
        <Route path="/movies/:movieId/reviews" element={<MovieReviews/>}/>
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </>
  );
};

export default App;
