import axios from 'axios'
import { useEffect, useState } from 'react';
import './App.css';
import { Link, Routes, Route} from "react-router-dom"
import NewWatchParty from './components/NewWatchParty';
function App() {
  const [movie, setMovie] = useState({});
  const [movies, setMovies] = useState({});

  useEffect(() => {
    axios.get("http://localhost:3001/api/users/watchlists").then((res,req) => {
    axios.get(`https://api.themoviedb.org/3/movie/${res.data[1].moviesInWatchList[1].movieId}?api_key=79ea73dd8ffddae85c10ba47e73e9093&language=en-US`).then((res,req) => {
     console.log(res.data) 
    setMovie(res.data)
  })
})
  }, [])
  return (
    <div className="App">
          <Routes>
            <Route path = "/newparty" element = {<NewWatchParty></NewWatchParty>} >
            </Route>
            <Route path = "/" element = {
              <div>
                 <header className="App-header">
        <h1> Test Movie</h1>
         </header>
         <h1>{movie.title}</h1>
         <img src= {`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title}/>
         <h3>{movie.overview}</h3>
         </div>} >
            </Route>
          </Routes>

      </div>
  );
}
export default App;