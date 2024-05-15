
import './App.css';

import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Navbar from './components/navbar';
import Stats from './components/homepage';
import Coin from './components/coin';

const App = () => {
    return (
        <BrowserRouter>
        <div className = "app">

            <div className = "navbar">

                <Navbar/>

            </div>

            <Routes>
        <Route path = "/" element = {<Stats/>}></Route>
        <Route path = "/coins" element = {<Coin/>}></Route>
            </Routes>

            <div className = "footer">

            </div>

        </div>
        </BrowserRouter>
    );

}

export default App;
