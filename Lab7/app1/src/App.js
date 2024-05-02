import { useState, useEffect } from 'react';
import './App.css';
import APIKey from './config';
import Movie from './components/Movie';
//import "./Movie.css";


const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=';
const SearchURL = 'https://api.themoviedb.org/3/search/movie?api_key=';


function App() {
const [movieResults, setMovieResults] = useState([]);
const [searchTerm, setSearchTerm] = useState('');
//const movieResults = [1,2,3];

useEffect( () => {
  fetch(APIURL + APIKey)
  .then( (response) => response.json() )
  .then( (data) => {
    console.log(data.results);
    setMovieResults(data.results);
  }
  )


}
,[])

const handleOnSubmit = (e) => {
  e.preventDefault();

  if(searchTerm)
  {fetch(SearchURL + APIKey + "&query=" + searchTerm)
    .then( (response) => response.json() )
    .then (data) => :{
      console.log(data.results);
      setMovieResults(data.results);}
}

const handleOnChange = (e) => {
  console.log(e.targer.value);
  setSearchTerm(e.target.value)
}
  return (
    <>
    <form onSubmit={handleOnSubmit}>
      <input className = "search" type = "search" placeholder = 'Search...' value = {searchTerm} onChange = {handleOnChange}></input>
    </form>
    <header>
      
    </header>
    
    
    <div className = 'movie-container'>
    {movieResults.map( (element) => (<Movie key={element.id} {...element}/>)

    )}
    </div>

    </>

  );
}

export default App;
