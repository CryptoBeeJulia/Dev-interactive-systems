import React, { useState, useEffect } from "react";
import axios from 'axios';



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
      <h2>Global Crypto Stats</h2>
      {stats && (
        <div>
          <p>Total Coins: {stats.totalCoins}</p>
          <p>Total 24h Volume: ${stats.total24hVolume}</p>
          <p>Total Market Cap: ${stats.totalMarketCap}</p>
        </div>
      )}
    </div>
  );
};

export default Stats;