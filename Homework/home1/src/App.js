import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p>Made in React App</p>
    </div>
  );
}

// note! the below function replaces the Hello function!

function Square({value})
{
  return (
    <button className = "square">
    {value}
    </button>
    )
  }

  function Board () {
    return(
      <div className = "board">
        <div className = "boardRow">
        <Square value={"X"}/>
        <Square value={"X"}/>
        <Square value={"X"}/>
        </div>
        <div className = "boardRow">
        <Square value={"X"}/>
        <Square value={"X"}/>
        <Square value={"X"}/>
        </div>
        <div className = "boardRow">
        <Square value={"X"}/>
        <Square value={"X"}/>
        <Square value={"X"}/>
        </div>
      </div>
    )
  }

  ReactDOM.render(
    <Board/>, 
    document.getElementById('root')
  )


export default App;



 

  
