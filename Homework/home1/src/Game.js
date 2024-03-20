
import ReactDOM from 'react-dom';

function Square({value})
{
  return (
    <button className = "square">
    {value}
    </button>
    )
  }

  ReactDOM.render(
    <Square value = {'X'}/>,
    document.getElementById('root')
  )

export default Square; 