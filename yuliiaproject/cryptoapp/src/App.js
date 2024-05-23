
import './App.css';

import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Stats from './components/pages/homepage';
import Coin from './components/pages/coin';
import { CoinDetail } from './components/pages/coindetail';

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
        <Route path = "/coins/:id" element = {<CoinDetail/>}></Route>
            </Routes>

            <div className = "footer">

                <Footer/>

            </div>

        </div>
        </BrowserRouter>
    );

}

export default App;
