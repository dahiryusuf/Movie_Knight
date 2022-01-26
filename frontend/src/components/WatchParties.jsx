import {React, useEffect, useState} from "react";
import WatchPartiesItem from "./WatchPartiesItem";
import { Header } from "./Header";
import axios from "axios";
import { useCookies } from 'react-cookie';
import Grid from '@mui/material/Grid';


export default function WatchParties() {

const [watchparties, setWatchParties] = useState([]);
  const [cookies, setCookie] = useCookies(['user']);
  const id = cookies.Name


  useEffect(() => {
    axios.get(`http://localhost:3001/api/users/watchparties/${id}`).then((res,req) => {
 
    setWatchParties(res.data)
  })
  }, [])





  const parsedMovies = watchparties.map(movie => <WatchPartiesItem key={movie.id}
 link={movie.link} 
    //  title={movie.title} 
     user_id = {movie.user_id}
     party_date ={movie.party_date}
     message = {movie.messages}
     id={movie.id}
     poster_path={movie.winner}
     movie = {movie.winner_movie_id}
     
     />);






  return <div>
<Header/>
<h1> &emsp; Layla's Watch Parties </h1>
<div className="movie-grid">
{parsedMovies}
</div>
  </div>;
}
