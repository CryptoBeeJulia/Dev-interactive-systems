import React from "react";
import {NavLink} from 'react-router-dom';
import mylogo from "../components/images/mylogo.png";
import './navbar.css';

const Navbar = () => {
    return (
        <div className = "nav-container">
            <div className = "logo-container">
            <a href = "/" className="logo">
            <img src= {mylogo} className = "logo-img" alt = 'cryptoapp logo'></img>
      </a>     
            </div>
            <nav className = 'navigation'>
        <NavLink to = "/" className = 'link'> Global Stats</NavLink>
        <NavLink to = "/coins" className = 'link'>Coins</NavLink>
      </nav>
        </div>
    )
}

export default Navbar;