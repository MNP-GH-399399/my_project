import { useState } from 'react';
import './App.css';
import Login from './assets/Components/Login';
import Navbar from './assets/Components/Navbar';
import Products from './assets/Components/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './assets/Components/Profile';
import Home from './assets/Components/Home';
import Product1 from './assets/Components/Product1';
import Cart from './assets/Components/Cart';
import Orders from './assets/Components/Orders';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} /> {/* Render Login on the root path */}
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product1" element={<Product1 />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Orders" element={<Orders/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
