import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function Carousel({ movies }) {
  /*   const [movies, setMovies] = useState([]);
  const searchRedux = useSelector((state) => state.search);

  useEffect(() => {
    setMovies(searchRedux)
  }, [searchRedux]); */

  return (
    <div className="mainDetails">
      <div className="float-child">
        <img
          key={movies.id}
          src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`}
        />
      </div>

      <div className="float-child">
        <div className="details">
          <h1>{movies.title}</h1>
          <p className="stretch">
            <span>
              <span role="img" aria-label="IMDb Rating">
                ⭐
              </span>
              &nbsp;&nbsp;
              {movies.vote_average}
              &nbsp;&nbsp;
              <span role="img" aria-label="IMDb Votes">
                👍
              </span>{" "}
              &nbsp;&nbsp;
              {movies.vote_count}
            </span>
          </p>
          <p className="stretch">Actors: prueba</p>
        </div>
      </div>
    </div>
  );
}
