import axios from 'axios'
import { useEffect, useState } from 'react';
import './App.css';
// import MovieList from './components/MovieList';
import { Header }  from './components/Header';
import {Carousal} from './components/Carousal';
import GenreTabs from './components/GenreTabs';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [movie, setMovie] = useState([]);
  const [action, setAction] = useState([]);

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
     <Header /> 
     <Carousal movie = {movie}></Carousal>
       <GenreTabs movie = {movie} action ={action}></GenreTabs>
    </div>
);
}
export default App;