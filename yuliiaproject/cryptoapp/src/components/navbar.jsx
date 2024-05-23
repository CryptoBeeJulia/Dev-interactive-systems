import React from "react";
import {NavLink} from 'react-router-dom';
import yuliialogo from "../components/images/yuliialogo.jpg";
import './navbar.css';

const Navbar = () => {
    return (
        <div className = "nav-container">
            <div className = "logo-container">
            <a href = "/" className="logo">
            <img src= {yuliialogo} className = "logo-img" alt = 'cryptoapp logo'></img>
      </a>     
            </div>
            <nav className = 'navigation'>
        <NavLink to = "/" className = 'link'>Home</NavLink>
        <NavLink to = "/coins" className = 'link'>Cryptocurrencies</NavLink>
      </nav>
        </div>
    )
}

export default Navbar;