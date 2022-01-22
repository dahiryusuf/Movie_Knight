import {React, useEffect, useState} from "react";
import { MovieCard } from "./MovieCard";
import { Header } from "./Header";
import axios from "axios";


export default function WatchList(props) {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/users/watchlist/1").then((res,req) => {
    setWatchlist(res.data)
  })
  }, [])
  console.log('watch',watchlist)
  console.log('props',props.movie)

  const parsedMovies = watchlist.map(movie => <MovieCard key={movie.id}
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
