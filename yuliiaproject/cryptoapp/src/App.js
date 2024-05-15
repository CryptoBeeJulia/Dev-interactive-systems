
import './App.css';

import React from 'react';

import Navbar from './components/navbar';
import Stats from './components/homepage';
import Coin from './components/coin';

const App = () => {
    return (
        <div className = "app">

            <h3>cryptoapp</h3>

            <div className = "navbar">

                <Navbar/>

            </div>

            <div className = "main">
        
                <Stats/>

            </div>

            <div className = "coin">

                <Coin/>

            </div>

            <div className = "footer">

            </div>

        </div>
    );

}

export default App;
