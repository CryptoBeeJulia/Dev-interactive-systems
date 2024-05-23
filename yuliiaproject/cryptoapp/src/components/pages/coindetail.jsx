import {useParams} from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import './coindetail.css';

const formatNumber = (number) => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 3,
  }).format(number);

};

const CoinDetail = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoinDetail = async () => {
      try {
        const response = await axios.get(`https://coinranking1.p.rapidapi.com/coin/${id}`, {
          headers: {
            'X-RapidAPI-Key': '924b0950b2msha34f3cf2693d005p1c7503jsn8f0a3933aa64',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
          }
        });

        setCoin(response.data.data.coin);
      } catch (error) {
        setError('Failed to fetch coin details');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoinDetail();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!coin) {
    return <div>No coin data available</div>;
  }

  return (
    <div className="coin-detail-container">
      <h2>{coin.name} ({coin.symbol})</h2>
      <img src={coin.iconUrl} alt={coin.name} className="coin-detail-img" />
      <div className="coin-detail-info">
        <p><strong>Current price:</strong> ${formatNumber(coin.price)}</p>
        <p><strong>24h change:</strong> {coin.change}%</p>
        <p><strong>Market cap:</strong> ${formatNumber(coin.marketCap)}</p>
        <p><strong>Rank:</strong> {coin.rank}</p>
        <p><strong>All-time high:</strong> ${formatNumber(coin.allTimeHigh.price)}</p>
        <p><strong>Number of exchanges:</strong> {coin.numberOfExchanges}</p>
        <p><strong>Number of markets:</strong> {coin.numberOfMarkets}</p>
        <p><strong>Description:</strong> {coin.description}</p>
        <p><strong>Website:</strong> <a href={coin.websiteUrl} target="_blank" rel="noopener noreferrer">{coin.websiteUrl}</a></p>
      </div>
    </div>
  );
};

export default CoinDetail;
       