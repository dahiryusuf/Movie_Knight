import React from 'react'
import Calendar from 'react-calendar'
import { useState,useContext,useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import '../NewWatchParty.css'
import { Link } from "react-router-dom";
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { GlobalContext } from "../context/GlobalState";

export default function NewWatchParty() {
  const [value, onChange] = useState(new Date());
  const [message, setMessage] = useState("");
  const [movies, setMovies] = useState([]);
  const [cookies, setCookie] = useCookies(['user']);
  const {
    watched,
    clearWatched
  } = useContext(GlobalContext);
  let array =[]
  useEffect(() => {
    for(let i of watched) {
    axios.get(`https://api.themoviedb.org/3/movie/${i}?api_key=79ea73dd8ffddae85c10ba47e73e9093&language=en-US`).then((res,req) => {
   
    array.push(res.data)
  })
    }
    setMovies(array)
  }, [watched])
 useEffect(() => {
  
 }, [])
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(message, value)
    
  
  
    const link = "testing"
    
    axios.post('http://localhost:3001/api/newparty', {
      link,
      userId: cookies.Name,
      message: message,
      date: value
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

  return (
    <div className = "body">
        <h1> Create A New Watch Party</h1>
       
         <Calendar onChange={onChange} />
         <br/>
         <div>
         <form onSubmit={event => event.preventDefault()}>
         <input
          name="name"
          type="text"
          placeholder="Enter Your Message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          data-testid="student-name-input"
        />
      </form>
      
      <button className="btn btn-primary" onClick = {handleSubmit}>Pick Movies</button>
      <br/>
      <br/>
         <Link  className="btn btn-primary" to="/moviepicker">Generate Link</Link>
          <br/>
          <br/>
          
      
    </div>
 

    </div>
  )
}
