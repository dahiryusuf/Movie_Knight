import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faChessKnight} from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon size='1x' icon={faSignOutAlt
} />
const elements = <FontAwesomeIcon size='1x' icon={faChessKnight} />


export const Header = () => {
  return (
    <header className = 'headers'>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
           <Link to="/home">  {elements} &nbsp;MovieKnight</Link>
          </div>

          <ul className="nav-links">
            <li>
            <Link to="/watchlist">  Watch List</Link>
            </li>

            <li>
            <Link to="/watchparties">  Movie Knights</Link>
            </li>

            <li className="btn btn-main">
           
            <Link to="/newparty">Create</Link>
     
            

             
            </li>
            <li>
            <Link to="/">  {element}</Link>
            </li>

          </ul>
          
        </div>
      </div>
 
    </header>
  );
};