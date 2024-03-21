import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import React from 'react'
import Game  from './Game';
import { Board } from './Board';

function App() {
  return (
   // <div className="App">
     // <h1>Hello World!</h1>
     // <p>Made in React App</p>
      
   // </div>
   <>
   <Board/>
   </>
   
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
    const [squares, setSquares] = React.useState(Array(9).fill(null))
    const [isX, setisX] = React.useState(true)

    const handleClick = (i) => {
      squares[i] = isX? 'X' : 'O'
      setSquares(squares)
      setisX(!isX)

    }

    return (
      <div className="board">
        <div className="boardRow">
          <Square value={squares[0]} onClick={() => handleClick(0)} />
          <Square value={squares[1]} onClick={() => handleClick(1)} />
          <Square value={squares[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="boardRow">
          <Square value={squares[3]} onClick={() => handleClick(3)} />
          <Square value={squares[4]} onClick={() => handleClick(4)} />
          <Square value={squares[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="boardRow">
          <Square value={squares[6]} onClick={() => handleClick(6)} />
          <Square value={squares[7]} onClick={() => handleClick(7)} />
          <Square value={squares[8]} onClick={() => handleClick(8)} />
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

  step 4: new consts in board function

function Board() {
    const [squares, setSquares] = React.useState(Array(9).fill(null))
    const [isX, setisX] = React.useState(true)
    return (...



step 5: handleClick function added

  const handleClick = (i) => {
      squares[i] = isX? 'X' : 'O'
      setSquares(squares)
      setisX(!isX)

    }

step 6: updat an array
<div className="board">
        <div className="boardRow">
          <Square value={squares[0]} onClick={() => handleClick(0)} />
          <Square value={squares[1]} onClick={() => handleClick(1)} />
          <Square value={squares[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="boardRow">
          <Square value={squares[3]} onClick={() => handleClick(3)} />
          <Square value={squares[4]} onClick={() => handleClick(4)} />
          <Square value={squares[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="boardRow">
          <Square value={squares[6]} onClick={() => handleClick(6)} />
          <Square value={squares[7]} onClick={() => handleClick(7)} />
          <Square value={squares[8]} onClick={() => handleClick(8)} />
        </div>
      </div>



*/
