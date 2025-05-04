import './App.css';
import './global.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Categories from "./components/Categories";
import About from "./components/About";
import Footer from "./components/Footer";
import Cart from './components/Cart/Cart';
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import Checkout from "./components/Checkout";


function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    const newCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(newCart);
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handlePlaceOrder = (orderDetails) => {
    console.log("Commande passée :", orderDetails);
    setCartItems([]);
  };

  return (
    <Router>
      <Header cartItemCount={cartItems.length} />
      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<FeaturedProducts onAddToCart={handleAddToCart} />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={
          <Cart 
            cartItems={cartItems}
            onRemove={handleRemoveFromCart}
            onClearCart={handleClearCart}
          />
        } />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Checkout cartItems={cartItems} onPlaceOrder={handlePlaceOrder} />
      <Footer />
    </Router>
  );
}

export default App;
