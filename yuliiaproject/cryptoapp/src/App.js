
import './App.css';

import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Stats from './components/pages/homepage';
import Coin from './components/pages/coin';
import CoinDetail from './components/pages/coindetail';
import NotFound from './components/pages/notfound';
import Admin from './components/pages/admin';

const App = () => {
    const isAdmin = false;
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
        <Route path = "/admin" element = {isAdmin? <Admin/> : <Navigate to="/" ></Navigate>}></Route>
        <Route path = "*" element = {<NotFound/>}></Route>
            </Routes>

            <div className = "footer">

                <Footer/>

            </div>

        </div>
        </BrowserRouter>
    );

}

export default App;
