import logo from './logo.svg';
import './App.css';
import About from './About';
function Testing()
  {
    return(
    <button>Click Me</button>
    );
  }

  function SignUp()
  {
    return(
    <button>Sign Up</button>
    );
  }

  function LogIn()
  {
    return(
    <button>Log In</button>
    );
  }


let isNewUser = true;
let content;
/*
if(isNewUser)
{
  content = <SignUp/>;
}
else
{
  content = <LogIn/>;
}
*/

function App() {
  return (
    <>
    <h1>Hello to our lab</h1>
    <p>test parahraph</p>
    <Testing/>
    <About/>
    {isNewUser? <SignUp/>: <LogIn/>}
    </>
  );
}

export default App;
