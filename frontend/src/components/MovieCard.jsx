import {React,useState, useEffect} from "react";
import { Modal, Button} from 'react-bootstrap';
import {MovieControls} from "./MovieControls";
import axios from "axios";

export const MovieCard = (props) => {
  const [show, setShow]=useState(false);

  const handleShow=()=>setShow(true);
  const handleClose=()=>setShow(false);

  const addMovieToWatchList = function() {
    axios.post('http://localhost:3001/api/users/watchlist/2', {
    movie_id: '43253423',
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
   }

   const handleSubmit = (event) => {
    event.preventDefault();
  
  
    const movie_id = props.id
    axios.post('http://localhost:3001/api/users/watchlist/2', {
      movie_id
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

  //  useEffect(() => {
  // addMovieToWatchList()
  // }, [show] ) ;
   
  return (
    <>
    <div className="movie-card" onClick={handleShow} >
    <div className="overlay"></div>

<img
  src={`https://image.tmdb.org/t/p/w200${props.poster}`}
  alt={`${props.title} Poster`}
/>
<MovieControls movie_id = {props.id} />
</div>
      
      <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton >
                        <Modal.Title></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                      <img className="card-img-top" style={{width:'14rem'}}   src={`https://image.tmdb.org/t/p/w200${props.poster}`}  alt={props.title}  />
                      <h3>{props.title}</h3>
                      <h4>IMDb: {props.vote_average}</h4>
                      <h5>Release Date: {props.release_date}</h5>
                      <br></br>
                      <h6>Overview</h6>
                      <p>{props.overview}</p>
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="primary" onClick={handleClose}>Close</Button>
                          <Button variant="secondary"onClick={handleSubmit} >Add</Button>
                      </Modal.Footer>
                  </Modal>

   
    </>
  );
};
