import React from "react";
import {MovieControls} from "./MovieControls";

export const MovieCard = (props) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>

      <img
        src={`https://image.tmdb.org/t/p/w200${props.poster}`}
        alt={`${props.title} Poster`}
      />
      <MovieControls page = {props.page} />
    </div>
  );
};
