import {React,useState, useEffect, useContext} from "react";
import { Modal, Button} from 'react-bootstrap';
import {MovieControls} from "./MovieControls";
import axios from "axios";
import { useCookies } from 'react-cookie';
import { GlobalContext } from "../context/GlobalState";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon size='3x' icon={faPlusCircle
} />

export const MovieCard = (props) => {
  const [show, setShow]=useState(false);
  const [cookies, setCookie] = useCookies(['user']);
  const id = cookies.Name

  const handleShow=()=>setShow(true);
  const handleClose=()=>setShow(false);

  const {
    addMovieToWatchlist,
    addMovieToWatched,
    removeFromWatched,
    watchlist,
    watched,
    clearWatched
  } = useContext(GlobalContext);
  // const addMovieToWatchList = function() {
  //   axios.post('http://localhost:3001/api/users/watchlist/2', {
  //   movie_id: '43253423',
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
  //  }
  let index = false
  for(let i of watched){
  if(i === props.id && props.page){
    index = true
  }
}
  

const handleRemove = (event) => {
  event.preventDefault();
  console.log("in handleremove");
}
   const handleSubmit = (event) => {
    event.preventDefault();
    if(!props.page){
    const movie_id = props.id
    const poster_path = props.poster
    axios.post(`http://localhost:3001/api/users/watchlist/${id}`, {
      movie_id,
      poster_path
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    handleClose()
  }
  
  else{
     addMovieToWatched(props.id)
     handleClose()
  }

}

   
  return (
    <>
    <div className="movie-card"  >
    <div className="overlay" onClick={props.pick || props.pic ? handleRemove : handleShow}>

<img
  src={`https://image.tmdb.org/t/p/w200/${props.poster}`}
  alt={`${props.title} Poster`}
/>


{props.pick && !props.lo ? <MovieControls movie = {props.id} /> : <></>}
</div>
<img
        src={`https://image.tmdb.org/t/p/w200${props.poster}`}
        alt={`${props.title} Poster`}
      />
      {!props.pick && <>
         <div className="inner-card-controls2">
        <button className="btn btn-main2" onClick={handleSubmit} >
       {element}
          </button>
    </div>
    </>
}
    </div>

    

      <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton >
                        
                        <Modal.Title>         <h3>{props.title}</h3></Modal.Title>
                      </Modal.Header>
                      <Modal.Body sx={{ textAlign: 'center' }}>
                        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}> 
                      <img  className="card-img-top" style={{width:'14rem'}}   src={`https://image.tmdb.org/t/p/w200${props.poster}`}  
                      alt={props.title}  />
                      </div>
                      <h4>IMDb: {props.vote_average}</h4>
                      <h5>Release Date: {props.release_date}</h5>
                      <br></br>
                      <h6>Overview</h6>
                      <p>{props.overview}</p>
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="primary"onClick={handleSubmit} disabled = {index}>Add</Button>
                      </Modal.Footer>
                  </Modal>


   
    </>
  );
};
