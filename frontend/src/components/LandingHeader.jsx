import React from "react";
import { Link } from "react-router-dom";


export const LandingHeader = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            MovieKnight
          </div>

          <li>
          <Link to="/signup">Sign Up</Link>
            </li>

            <li>
            <Link to="/signin">Sign In</Link>
     
             
            </li>
          
        </div>
      </div>
    </header>
  );
};