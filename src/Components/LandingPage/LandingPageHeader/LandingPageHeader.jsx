import React from 'react';
import './LandingPageHeader.css';
import {Link} from "react-router-dom";

const Navbar = () => (
    <div className="container-header">
        <div className="navbar-header">
            <div className="logo-container-header">
                <img src="src/assets/airway_logo.svg" alt="Airplane Logo"
                     className="logo-img-header"/>
            </div>
            <ul className="menu-header">
                <li><a href="#" className="menu-item-header">Home</a></li>
                <li><a href="#" className="menu-item-header">About us</a></li>
                <li>
                    <Link to="/signup"><button className="button-header">Sign Up</button></Link>
                </li>
            </ul>

        </div>
        </div>
        );
        export default Navbar;