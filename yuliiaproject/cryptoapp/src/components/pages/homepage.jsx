import React, { useState, useEffect } from "react";
import axios from 'axios';
import './stats.css';
import Top10 from "./top10";

const formatNumber = (number) => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(number);
};

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


const Stats = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.request(options);
        setStats(response.data.data.stats);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStats();
  }, []);
  

  return (
    <div>
    <div className="stats-container">
      <h2 className="stats-heading">Global Cryptocurrency Statistics</h2>
      {stats && (
        <div>
          <p className="stats-item"><span className="stats-label">Total Coins:</span> <span className="stats-value">{formatNumber(stats.totalCoins)}</span></p>
          <p className="stats-item"><span className="stats-label">Total 24h Volume:</span> <span className="stats-value">${formatNumber(stats.total24hVolume)}</span></p>
          <p className="stats-item"><span className="stats-label">Total Market Cap:</span> <span className="stats-value">${formatNumber(stats.totalMarketCap)}</span></p>
        </div>
      )}
    </div>
    <Top10/>
    </div>
  );
};

export default Stats;