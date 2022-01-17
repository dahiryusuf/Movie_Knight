import React from "react";


export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            MovieKnight
          </div>

          <ul className="nav-links">
            <li>
            Watch List
            </li>

            <li>
           Watched
            </li>

            <li className="btn btn-main">
           
                + Create
             
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};