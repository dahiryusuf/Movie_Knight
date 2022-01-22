import {React, useEffect,useState} from "react";
import "../App.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { MovieCard } from "./MovieCard";
// import useGenre from "../hooks/useGenre";
import axios from "axios";


export default function GenreTabs(props) {

  const [result, setResult] = useState({
    data: {},
    loading: true,
    error: null
  })

// const results = useGenre("https://api.themoviedb.org/3/trending/movie/day?api_key=79ea73dd8ffddae85c10ba47e73e9093")

// const useGenre = (url) => {
  
//   useEffect(() => {
//     axios.get(url)
//       .then((res) => {
//         setResult({
//           data: res.data.results,
//           loading: false,
//           error: null
//         })
//       })
//       .catch(err => {
//         setResult(prev => ({
//           ...prev,
//           loading: false,
//           error: err.message
//         }))
//       })
//   }, [url])

// };

// const hufan = result.data
// console.log('hufan', hufan)
// console.log('pop', props.action)
  const parsedMovies = props.movie.map(movie => <MovieCard key={movie.id}
   poster={movie.poster_path} 
    title={movie.title} 
    vote_average = {movie.vote_average}
    release_date = {movie.release_date}
    overview = {movie.overview}
    id = {movie.id}
    
    />);
    const parsedAction = props.action.map(movie => <MovieCard key={movie.id}
      poster={movie.poster_path} 
       title={movie.title} 
       vote_average = {movie.vote_average}
       release_date = {movie.release_date}
       overview = {movie.overview}
       />);
       const parsedAdventure = props.adventure.map(movie => <MovieCard key={movie.id}
        poster={movie.poster_path} 
         title={movie.title} 
         vote_average = {movie.vote_average}
         release_date = {movie.release_date}
         overview = {movie.overview}
         id = {movie.id}
         />);

  return (
    
    <Tabs>
    <TabList>
      <Tab>Trending</Tab>
      <Tab>Action</Tab>
      <Tab>Adventure</Tab>
      <Tab>Animation</Tab>
      <Tab>Comedy</Tab>
      <Tab>Crime</Tab>
      <Tab>Documentary</Tab>
      <Tab>Drama</Tab>
      <Tab>Family</Tab>
      <Tab>Fantasy</Tab>
      <Tab>History</Tab>
      <Tab>Horror</Tab>
      <Tab>Mystery</Tab>
      <Tab>Romance</Tab>
      <Tab>Thriller</Tab>
     


    </TabList>

    <TabPanel  >
      <div className="movie-page">
<div className="container">
  <div className="header">
  </div>
    <div className="movie-grid">
    {parsedMovies}
    </div>

</div>
</div>
       
   
    </TabPanel>
    <TabPanel >
    <div className="movie-page">
<div className="container">
  <div className="header">
  </div>
    <div className="movie-grid">
    {parsedAction}
    </div>

</div>
</div>
       
    </TabPanel>
    <TabPanel >
    <div className="movie-page">
<div className="container">
  <div className="header">
  </div>
    <div className="movie-grid">
    {parsedAdventure}
    </div>

</div>
</div>
       
      
    </TabPanel>
    <TabPanel >
    <div className="movie-page">
<div className="container">
  <div className="header">
  </div>
    <div className="movie-grid">
    {parsedAction}
    </div>

</div>
</div>
       
      
    </TabPanel>
    <TabPanel >
    <div className="movie-page">
<div className="container">
  <div className="header">
  </div>
    <div className="movie-grid">
    {parsedAction}
    </div>

</div>
</div>
       
      
    </TabPanel>
    <TabPanel >
    <div className="movie-page">
<div className="container">
  <div className="header">
  </div>
    <div className="movie-grid">
    {parsedAction}
    </div>

</div>
</div>
       
      
    </TabPanel>
    <TabPanel >
    <div className="movie-page">
<div className="container">
  <div className="header">
  </div>
    <div className="movie-grid">
    {parsedAction}
    </div>

</div>
</div>
       
      
    </TabPanel>
    <TabPanel >
    <div className="movie-page">
<div className="container">
  <div className="header">
  </div>
    <div className="movie-grid">
    {parsedAction}
    </div>

</div>
</div>
       
      
    </TabPanel>
    <TabPanel >
    <div className="movie-page">
<div className="container">
  <div className="header">
  </div>
    <div className="movie-grid">
    {parsedAction}
    </div>

</div>
</div>
       
      
    </TabPanel>
    <TabPanel >
    <div className="movie-page">
<div className="container">
  <div className="header">
  </div>
    <div className="movie-grid">
    {parsedAction}
    </div>

</div>
</div>
       
      
    </TabPanel>
    <TabPanel >
    <div className="movie-page">
<div className="container">
  <div className="header">
  </div>
    <div className="movie-grid">
    {parsedAction}
    </div>

</div>
</div>
       
      
    </TabPanel>
    <TabPanel >
    <div className="movie-page">
<div className="container">
  <div className="header">
  </div>
    <div className="movie-grid">
    {parsedAction}
    </div>

</div>
</div>
       
      
    </TabPanel>
    <TabPanel >
    <div className="movie-page">
<div className="container">
  <div className="header">
  </div>
    <div className="movie-grid">
    {parsedAction}
    </div>

</div>
</div>
       
      
    </TabPanel>
    <TabPanel >
    <div className="movie-page">
<div className="container">
  <div className="header">
  </div>
    <div className="movie-grid">
    {parsedAction}
    </div>

</div>
</div>
       
      
    </TabPanel>
    <TabPanel >
    <div className="movie-page">
<div className="container">
  <div className="header">
  </div>
    <div className="movie-grid">
    {parsedAction}
    </div>

</div>
</div>
       
      
    </TabPanel>

    
  </Tabs>
);
}