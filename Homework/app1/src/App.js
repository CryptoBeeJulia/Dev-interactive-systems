import logo from './logo.svg';
import { About } from './About';
import './App.css';
import './About.css'
function TestingComponent(){
  return(
<button>Click Me</button>
  );
}

function Loggin(){
  return(
<button>Loggin</button>
  );
}
function SignUp(){
  return(
<button>SignUp</button>
  );
}

let isnewUser=false;
let content;

if(isnewUser){
  content=<SignUp/>;
}
else{
  content = <Loggin/>;
}


function App() {
  return (
    <>
    <h1>Hello to our First App</h1>
    <p>This is my paragaraph with empty fragment</p>
    <TestingComponent/>
    <About/>
    {content}
    Hello
    {isnewUser?  <Loggin/>:<SignUp/>}
    


    </>
  );
}

export default App;
