import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
import Main from "./Components/Main";

// import Home from "./Routecomponents/Home";
import About from "./Routecomponents/About";
import Projects from "./Routecomponents/Projects";
import Contact from "./Routecomponents/Contact";

import MovieList from "./MoviAPI/MovieList";
import MovieListHeading from "./MoviAPI/MovieListHeading";
import SearchBox from "./MoviAPI/SearchBox";
import AddFavourites from "./MoviAPI/AddFavourites";
import RemoveFavs from "./MoviAPI/RemoveFavs";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);
  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=afd87f37`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouriteList);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <div className=" container-fluid movie-app">
        <div className="movie-heading d-flex align-items-center mt-4 mb-4">
          <MovieListHeading heading="Movies" />
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
        <div className="movie-list">
          <MovieList
            movies={movies}
            handleFavouritesClick={addFavouriteMovie}
            favouriteComponent={AddFavourites}
          />
        </div>

        {/* <Footer />` */}
        <div className="movie-heading d-flex align-items-center mt-4 mb-4">
          <MovieListHeading heading="Favourites" />
        </div>
        <div className="movie-list">
          <MovieList
            movies={favourites}
            handleFavouritesClick={removeFavouriteMovie}
            favouriteComponent={RemoveFavs}
          />
        </div>
      </div>
    </>
  );
}

export default App;
