import { useState } from 'react'
import './App.css'
import Login from './assets/Components/Login'
import Navbar from './assets/Components/Navbar'
import Products from './assets/Components/Products'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Dashboard from './assets/Components/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import  Profile  from './assets/Components/Profile'
import Home from './assets/Components/Home'
import Product1 from './assets/Components/Product1'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
 

   
<Routes>
<Route path="/" index element={<Login/>}/>
<Route path="/home"  element={<Home/>}/>
  <Route path="/Products"  element={<Products/>}/>
  <Route path="/Profile"  element={<Profile/>}/>
  <Route path="/Product1"  element={<Product1/>}/> 
  <Route path="/Product1"  element={<Product1/>}/> 

  
</Routes>
</BrowserRouter>
    </>
  )
}

export default App
