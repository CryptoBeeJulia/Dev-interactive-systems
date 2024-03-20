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

function Square({value, onClick})
{
  return (
    <button className = "square" onClick={onClick}>
    {value}
    </button>
    )
  }

function Board() {
  

  return (
    <div className="board">
      <div className="boardRow">
        <Square value={'X'}/>
        <Square value={'O'}/>
        <Square value={'X'}/>
      </div>
      <div className="boardRow">
        <Square value={'O'}/>
        <Square value={'X'}/>
        <Square value={'O'}/>
      </div>
      <div className="boardRow">
        <Square value={'X'}/>
        <Square value={'O'}/>
        <Square value={'X'}/>
      </div>
    </div>
  )
}



  ReactDOM.render(
    <Board />, 
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


step 2: board structure rendered

  function Board() {
  return (
    <div className="board">
      <div className="boardRow">
        <Square value={'X'}/>
        <Square value={'O'}/>
        <Square value={'X'}/>
      </div>
      <div className="boardRow">
        <Square value={'O'}/>
        <Square value={'X'}/>
        <Square value={'O'}/>
      </div>
      <div className="boardRow">
        <Square value={'X'}/>
        <Square value={'O'}/>
        <Square value={'X'}/>
      </div>
    </div>
  )
}



  ReactDOM.render(
    <Board />, 
    document.getElementById('root')
  )


  step 3: onClick added to Square function

  function Square({value, onClick})
{
  return (
    <button className = "square" onClick={onClick}>
    {value}
    </button>
    )
  }

*/
