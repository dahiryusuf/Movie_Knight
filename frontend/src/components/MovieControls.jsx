import React from "react";

export const MovieControls= (props) => {
return (
    <div className="inner-card-controls">
        <button className="btn btn-main2" >
           {props.page ? "Add to Playlist" : "Add to WatchList" }
          </button>
    </div>
  )};