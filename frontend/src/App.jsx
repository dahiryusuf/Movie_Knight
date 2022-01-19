import axios from 'axios'
import { useEffect, useState } from 'react';
import './App.css';
import { Link, Routes, Route} from "react-router-dom"
import NewWatchParty from './components/NewWatchParty';
import { Header }  from './components/Header';
import {Carousal} from './components/Carousal';
import GenreTabs from './components/GenreTabs';
import Landing from './components/Landing';
import Signup from './components/Signup';
import Signin from './components/Signin';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [movie, setMovie] = useState([]);
  const [movies, setMovies] = useState([]);
  const [action, setAction] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/users/watchlists").then((res,req) => {
    axios.get(`https://api.themoviedb.org/3/movie/${res.data[1].moviesInWatchList[1].movieId}?api_key=79ea73dd8ffddae85c10ba47e73e9093&language=en-US`).then((res,req) => {
     console.log(res.data) 
    setMovies(res.data)
  })
})
  }, [])
  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=79ea73dd8ffddae85c10ba47e73e9093").then((res,req) => {

    setMovie(res.data.results)})
  }, [])

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/discover/movie?api_key=79ea73dd8ffddae85c10ba47e73e9093&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate").then((res,req) => {
    setAction(res.data.results)})
  }, [])

  return (
    <div className="App">
          <Routes>
            <Route path = "/newparty" element = {<div><Header/> <NewWatchParty></NewWatchParty></div>} >
            </Route>
            <Route path = "/home" element = {
              <div>
           <div>
    <Header/>
     <Carousal movie = {movie}></Carousal>
       <GenreTabs movie = {movie} action ={action}></GenreTabs>
    </div>
);
         </div>} >
            </Route>
            <Route path = "/" element = { 
             <Landing></Landing> }
             ></Route>
             <Route path = "/signup" element = { 
             <Signup></Signup> }
             ></Route>
             <Route path = "/signin" element = { 
             <Signin></Signin> }
             ></Route>
          </Routes>

      </div>
  );
// import MovieList from './components/MovieList';
  }
export default App;