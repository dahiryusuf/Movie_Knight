import axios from "axios";
import React from "react";

// const addMovieToWatched = function(movie_id, user_id) {
//   axios.post(`http://localhost:3001/api/users/watchlist/${user_id}`, {
//     movie_id: movie_id}) 
//      .then(function (response) {
//      console.log(response);
//    })
//    .catch(function (error) {
//      console.log(error);
//    });
//  }



export const MovieControls= (props) => {
  

return (
    <div className="inner-card-controls">
        <button className="btn btn-main2"  >
           Add to WatchList
          </button>
    </div>
  )};