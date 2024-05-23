import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);


const formatNumber = (number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 3,
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

  export const Chart = () => {
    const params = useParams();
    const [coins, setCoins] = useState([]);
    const [selectedCoin, setSelectedCoin] = useState(null);
    const [chartData, setChartData] = useState({});

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

    useEffect(() => {
        if (coins.length > 0) {
          const coin = coins.find(coin => coin.uuid === params.id);
          setSelectedCoin(coin);
          
          if (coin) {
            const sparklineData = coin.sparkline;
    
            const data = {
            labels: Array(sparklineData.length).fill(''),
              datasets: [
                {
                  label: `${coin.name} Price (24h)`,
                  data: sparklineData, 
                  borderColor: 'rgba(75, 192, 192, 1)',
                  backgroundColor: 'rgba(75, 192, 192, 0.2)',
                  fill: true,
                },
              ],
            };

            setChartData(data);
        }
      }
    }, [coins, params.id]);

    return (
        <>
          {selectedCoin && (
            <div>
              <h2> Last 24 hours {selectedCoin.name} price change</h2>
              <Line data={chartData} />
            </div>
          )}
        </>
      );
    };


  export default Chart;