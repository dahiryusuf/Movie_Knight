import React from 'react'
import Calendar from 'react-calendar'
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import '../NewWatchParty.css'

export default function NewWatchParty() {
  const [value, onChange] = useState(new Date());

 console.log(value)
  return (
    <div className = "body">
        <h1> Create A New Watch Party</h1>
         <Calendar onChange={onChange} />
         <br/>
         <div>
         <p>Add a message</p>
         <input className ="form" type="text" name="longURL" placeholder="Type in here" />
         <br/>
         <br/>
          <button type="submit" className="btn btn-primary">Generate Link</button>
    </div>
    </div>
  )
}
