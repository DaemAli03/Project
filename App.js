import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartProvider } from './components/CartPage/CartContext/CartContext'
import NavBar from './components/Navbar/NavBar'
import About from './pages/About'
import Blog from './pages/Blog'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import Home from './pages/Home'
import LoginSignup from './pages/LoginSignup'
import Shop from './pages/Shop'
export default function App() {
  return (
    <CartProvider>
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </CartProvider>
  )
}
