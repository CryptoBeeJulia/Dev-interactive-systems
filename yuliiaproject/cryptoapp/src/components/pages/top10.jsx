import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import './coin.css';



const options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    'tiers[0]': '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
  },
  headers: {
    'X-RapidAPI-Key': '924b0950b2msha34f3cf2693d005p1c7503jsn8f0a3933aa64',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

const formatNumber = (number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 3,
    }).format(number);
  
};


const Top10 = () => {
    const [coins, setCoins] = useState([]);
  
    useEffect(() => {
      const fetchCoins = async () => {
        try {
          const response = await axios.request(options);
          setCoins(response.data.data.coins);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchCoins();
    }, []);
  
    return (
      <div className="top-coin-container">
        <h2>Top-10 Cryptocurrencies</h2>
        <ul className="top-coin-list">
        {coins.slice(0, 10).map((coin, index) => (
          <li key={index} className="top-coin-item">
            <Link to={`/coins/${coin.uuid}`}>
            <div>
                <img className="top-coin-img" src={coin.iconUrl} alt={coin.name} />
                <div className="top-coin-details">
                  <span className="top-coin-name">{coin.name}</span> ({coin.symbol})
                  <p className="top-marketcap">Market capitalization: ${formatNumber(coin.marketCap)}</p>
                  <p className="top-coin-price">Current price: ${formatNumber(coin.price)}</p>
                  <p className={`coin-change ${coin.change < 0 ? 'negative' : ''}`}>24h change: {coin.change}%</p>
                </div>
              </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Top10;