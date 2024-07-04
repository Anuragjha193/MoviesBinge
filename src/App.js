import React, { useState, useEffect } from "react";
import MovieCard from "./moviecard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=24dffcba";

const App = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("GodFather");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const result = await response.json();

    setMovies(result.Search);
  };

  return (
    <div className="app">
      <h1>MoviesBinge</h1>

      <div className="search">
        <input
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchMovie)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;