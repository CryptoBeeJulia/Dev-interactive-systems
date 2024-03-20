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

  function Board () {
    const [squares, setSquares] = React.useState(Array(9).fill(null))
    const [isX, setIsX] = React.useState(true)

    const handleClick = (i) => {
      squares[i] = isX? 'X': 'O' 
      setSquares(squares)
      setIsX(!isX)
    }

    return(
      <div className = "board">
        <div className = "boardRow">
        <Square value={squares[0]} onClick={() => handleClick(0)}/>
        <Square value={squares[1]} onClick={() => handleClick(1)}/>
        <Square value={squares[2]} onClick={() => handleClick(2)}/>
        </div>
        <div className = "boardRow">
        <Square value={squares[3]} onClick={() => handleClick(3)}/>
        <Square value={squares[4]} onClick={() => handleClick(4)}/>
        <Square value={squares[5]} onClick={() => handleClick(5)}/>
        </div>
        <div className = "boardRow">
        <Square value={squares[6]} onClick={() => handleClick(6)}/>
        <Square value={squares[7]} onClick={() => handleClick(7)}/>
        <Square value={squares[8]} onClick={() => handleClick(8)}/>
        </div>
      </div>
    )
  }

  ReactDOM.render(
    <Board/>, 
    document.getElementById('root')
  )


export default App;



 /*
 function Square({value, onClick})
{
  return (
    <button className = "square" onClick={onClick}>
    {value}
    </button>
    )
  }

  function Board () {
    const [squares, setSquares] = React.useState(Array(9).fill(null))
    const [isX, setIsX] = React.useState(true)

    const handleClick = (i) => {
      squares[i] = isX? 'X': 'O' 
      setSquares(squares)
      setIsX(!isX)
    }

    return(
      <div className = "board">
        <div className = "boardRow">
        <Square value={squares[0]} onClick={() => handleClick(0)}/>
        <Square value={squares[1]} onClick={() => handleClick(1)}/>
        <Square value={squares[2]} onClick={() => handleClick(2)}/>
        </div>
        <div className = "boardRow">
        <Square value={squares[3]} onClick={() => handleClick(3)}/>
        <Square value={squares[4]} onClick={() => handleClick(4)}/>
        <Square value={squares[5]} onClick={() => handleClick(5)}/>
        </div>
        <div className = "boardRow">
        <Square value={squares[6]} onClick={() => handleClick(6)}/>
        <Square value={squares[7]} onClick={() => handleClick(7)}/>
        <Square value={squares[8]} onClick={() => handleClick(8)}/>
        </div>
      </div>
    )
  }

  ReactDOM.render(
    <Board/>, 
    document.getElementById('root')
  )

  */
  

  
