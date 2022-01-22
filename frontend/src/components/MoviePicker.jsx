import React, { useState, useEffect, useRef } from 'react'
// import TinderCard from '../react-tinder-card/index'
import axios from 'axios'
import TinderCard from 'react-tinder-card'
import '../MoviePicker.css'

const db = [
  {
    name: 'Richard Hendricks',
    url: 'https://sm.ign.com/t/ign_in/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_epch.1080.jpg'
  },
  {
    name: 'Erlich Bachman',
    url: 'https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/gdv2pu6io6ekpg5r8mta/back-to-the-future?fimg-ssr-default'
  },
  {
    name: 'Monica Hall',
    url: 'https://www.indiewire.com/wp-content/uploads/2019/12/us-1.jpg?w=758'
  },
  {
    name: 'Jared Dunn',
    url: 'https://www.digitalartsonline.co.uk/cmsdata/slideshow/3662115/baby-driver-rory-hi-res.jpg'
  },
  {
    name: 'Dinesh Chugtai',
    url: 'https://www.indiewire.com/wp-content/uploads/2019/12/midsommar.jpg?w=800'
  }
]
export default function MoviePicker() {
  const [ip, setIP] = useState('');

  //creating function to load ip address from the API
  const getData = () => {
    axios.get('https://geolocation-db.com/json/').then((res,req) => {
    console.log(res.data);
    setIP(res.data.IPv4)
  })
  }
  
  useEffect( () => {
    //passing getData method to the lifecycle method
    getData()

  }, [])
  const characters = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div className = 'root'>
    <div>
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      <h1>Movie Picker</h1>
      <h2>Your IP Address is below so if you try to do this agian I will know</h2>
      <h4>{ip}</h4>
      <h2>Swipe right if you want to watch the movie</h2>
      <h2>Swipe left if you don't</h2>
      <br/>
      <div className='cardContainer'>
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
           
            </div>
          </TinderCard>
        )}
      </div>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
    </div>
    </div>
  )
}
  
