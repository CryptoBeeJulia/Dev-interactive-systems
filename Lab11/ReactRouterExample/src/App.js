import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {Home} from './components/Home';
import './App.css';
import { ProductList } from './components/ProductList';
import { ProductDetail } from './components/ProductDetail';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Admin } from './components/Admin';
import { NotFound } from './components/NotFound';


function App() {
  const isAdmin = false;
  return (
    <BrowserRouter>
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "/product" element = {<ProductList/>}></Route>
        <Route path = "/product/:id" element = {<ProductDetail/>}></Route>
        <Route path = "/contact" element = {<Contact/>}></Route>
        <Route path = "/admin" element = {isAdmin? <Admin/> : <Navigate to="/" ></Navigate>}></Route>
        <Route path = "*" element = {<NotFound/>}></Route>
      </Routes>
    </div>
    <footer>FOOTER</footer>
    </BrowserRouter>
  );
}

export default App;
