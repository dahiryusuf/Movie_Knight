import React from "react";
import { MovieCard } from "./MovieCard";

export default function MovieList(props) {
  console.log('movieList', props)
  const parsedMovies = props.dahir.map(movie => <MovieCard key={movie.id}
   poster={movie.poster_path} 
    title={movie.title} 
    />);
  return (

<div className="movie-page">
<div className="container">
  <div className="header">
    <h1 className="heading">Trending Movies</h1>

  </div>
  
    <div className="movie-grid">
    {parsedMovies}
    </div>

</div>
</div>)
}
