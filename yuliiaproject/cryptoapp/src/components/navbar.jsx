import React from "react";
import cryptologo from "../components/cryptologo.jpeg";

const Navbar = () => {
    return (
        <div className = "nav-container">
            <div className = "logo-container">
                <img src= {cryptologo} className = "logo-img" alt = 'cryptoapp logo'></img>
                <div className="logo-text">CryptoApp</div>
            </div>
        </div>
    )
}

export default Navbar;