
import './App.css';

import React from 'react';

import Navbar from './components/navbar';
import Homepage from './components/homepage';

const App = () => {
    return (
        <div className = "app">

            <h1>cryptoapp</h1>

            <div className = "navbar">

                <Navbar/>

            </div>

            <div className = "main">
        
                <Homepage/>

            </div>

            <div className = "coin">

            </div>

            <div className = "footer">

            </div>

        </div>
    );

}

export default App;
