import React from 'react'
import Calendar from 'react-calendar'
import { useState,useContext,useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import '../NewWatchParty.css'
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { GlobalContext } from "../context/GlobalState";
import { Link} from "react-router-dom"

export default function NewWatchParty() {
  const [value, onChange] = useState(new Date());
  const [message, setMessage] = useState("");
  const [movies, setMovies] = useState([]);
  const [cookies, setCookie] = useCookies(['user']);
  const {
    watched,
    clearWatched
  } = useContext(GlobalContext);


const generateRandomString = () => {
  let ranId = (Math.random() + 1).toString(36).substring(7);
  return ranId;
};

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
 const handleClick = (event) => {
  event.preventDefault();

 }


 const link = generateRandomString()
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(message, value)
    // clearWatched()
 let ids = 0
  
    
    axios.post('http://localhost:3001/api/newparty', {
      link,
      userId: cookies.Name,
      message: message,
      date: value
    })
    .then(function (response) {
      console.log(response);
      ids = response.data.id;
      for(let i of watched){
        axios.post(`http://localhost:3001/api/users/movielist/${ids}`, {
          movie_id: i
        })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
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
      
      <button className="btn btn-primary" onClick = {handleSubmit}>Test submit</button>
      <br/>
      <br/>
      <Link  className="btn btn-primary" to= {`/link/${link}`} >Link Page</Link>
      <br/>
      <br/>
      <Link  className="btn btn-primary" to= {`/pickmovie`} >pick movies</Link>
      <br/>
      <br/>
         <Link  className="btn btn-primary" to= {`/moviepicker/${link}`} >Generate Link</Link>
          <br/>
          <br/>
          
      
    </div>
 

    </div>
  )
}
