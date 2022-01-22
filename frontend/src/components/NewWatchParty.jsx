import React from 'react'
import Calendar from 'react-calendar'
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import '../NewWatchParty.css'
import { Link } from "react-router-dom";
import axios from 'axios';
import { useCookies } from 'react-cookie';

export default function NewWatchParty() {
  const [value, onChange] = useState(new Date());
  const [message, setMessage] = useState("");
  const [cookies, setCookie] = useCookies(['user']);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(message, value)
    
    // eslint-disable-next-line no-console
    const link = "testing"
    const userId = 3
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
