import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./pages/HomePage";
import { MoviesDetailsPage } from "./pages/MovieDetailsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { MoviesPage } from "./pages/MoviesPage";


const App = () => {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/movies" element={<MoviesPage/>} />
        <Route path="/movies/:movieId" element={<MoviesDetailsPage/>} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </>
  );
};

export default App;
