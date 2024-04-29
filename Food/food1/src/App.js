import { useState, useEffect } from 'react';
import API from './config'; //API Key should be stored here. There's no key for food.
import './App.css';
import food from './components/food';

const APIURL = 'https://www.themealdb.com/api/json/v1/1/random.php';

function App() {

const [foodResults, setFoodResults] = useState ([]);
const foodResults = [1,2,3];

useEffect( () => {
  fetch(APIURL)
  .then( (response) => response.json() )
  .then( (data) => {
    console.log(data);
    setFoodResults(data.results);

  }
  )

}
,[])

return (

      <>
      {foodResults.map( (element, index) => (<food key={index}/>)
  
      )}
      </>
      );
    }


export default App;
