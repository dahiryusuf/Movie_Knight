import React from "react";
import { MovieCard } from "./MovieCard";
import { Header } from "./Header";

export default function WatchList(props) {
  const parsedMovies = props.movie.map(movie => <MovieCard key={movie.id}
   poster={movie.poster_path} 
    title={movie.title} 
    />);
  return (

<div className="movie-page">
<Header /> 
<div className="container">
  <div className="header">
    <h1 className="heading">Dahir's Watchlist</h1>

  </div>
  
    <div className="movie-grid">
    {parsedMovies}
    </div>

</div>
</div>)
}
