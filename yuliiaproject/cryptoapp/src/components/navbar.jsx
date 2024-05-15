import React from "react";
import {Link, NavLink} from 'react-router-dom';
import cryptologo from "../components/cryptologo.jpeg";
import '../components/navbar.css';

const Navbar = () => {
    return (
        <div className = "nav-container">
            <div className = "logo-container">
            <div className="logo-text">CryptoApp</div>
            <a href = "/" className="logo">
            <img src= {cryptologo} className = "logo-img" alt = 'cryptoapp logo'></img>
      </a>     
            </div>
            <nav className = 'navigation'>
        <NavLink to = "/" className = 'link'>Stats</NavLink>
        <NavLink to = "/coins" className = 'link'>Coins</NavLink>
      </nav>
        </div>
    )
}

export default Navbar;