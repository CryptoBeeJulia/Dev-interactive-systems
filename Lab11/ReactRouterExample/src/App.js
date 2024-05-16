import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {Home, ProductDetail, ProductList, Contact, Admin, NotFound} from './pages/Index';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';




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
