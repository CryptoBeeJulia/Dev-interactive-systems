import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import React from 'react'

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p>Made in React App</p>
    </div>
  );
}

// note! if the below function works, it replaces the Hello function!

function Square({value})
{
  return (
    <button className = "square">
    {value}
    </button>
    )
  }



  ReactDOM.render(
    <Square value={'X'}/>, 
    document.getElementById('root')
  )


export default App;

/*

step 1: square rendered and working

function Square({value})
{
  return (
    <button className = "square">
    {value}
    </button>
    )
  }



  ReactDOM.render(
    <Square value={'X'}/>, 
    document.getElementById('root')
  )

*/
