import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faChessKnight} from '@fortawesome/free-solid-svg-icons'


const elements = <FontAwesomeIcon size='1x' icon={faChessKnight} />

export const LandingHeader = () => {
  return (
    <header className = 'headers'>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            {elements} &nbsp;MovieKnight
          </div>
<ul className="nav-links">
<li>
          <Link to="/signup">Sign Up</Link>
          </li>

<li>

            
            <Link to="/signin">Sign In</Link>
     
            </li>        
         
            </ul>
        </div>
      </div>
    </header>
  );
};