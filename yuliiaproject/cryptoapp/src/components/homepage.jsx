import React from "react";

import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/stats',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl'
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


const Homepage = () => {

    
  const globalStats = axios.request(options);
  console.log(globalStats.data);
 


    return (
        <>
        
        <h2>Global crypto stats</h2>

        <div>
        <p>Total Coins </p>
        
      </div>
        
        </>
  );
};

export default Homepage;