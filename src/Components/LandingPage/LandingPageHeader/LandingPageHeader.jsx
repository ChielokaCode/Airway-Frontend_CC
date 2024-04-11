import './LandingPageHeader.css';
import { Link} from 'react-router-dom';
import airwayLogo from "/src/assets/airways-logo.png";
import Search from "../LandingPageSearch/LandingPageSearch.jsx";
import {useState} from "react";

const Navbar = ({ isLoggedOut }) => {
  const firstName = JSON.parse(localStorage.getItem('userFirstName'));


  return(
  <div className='header-main-container'>
    <div className="navbarrpage">
      <div className="logoo-container">
        <img src={airwayLogo} alt="Airplane Logo" className="logoo-img" />
        <span className="airwayy-logo">Airway</span>
      </div>
      <ul className="menuu">
        <li><Link to={"/"} className="menuu-item">Home</Link></li>
        <li><Link to={"/about"} className="menuu-item">About us</Link></li>
        <li>
            {firstName ? (
              <div className="uFirstName">
                {isLoggedOut ? "" : firstName}
              </div>
            ) : (
              <Link to={"/signup"}><button className="buttonn">Sign Up</button></Link>
            )}
        </li>
      </ul>
  </div>
</div>

);

};
export default Navbar;