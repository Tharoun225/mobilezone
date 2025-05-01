/*import './App.css';
/*import React, { useState } from 'react';

import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Categories from "./components/Categories";
import About from "./components/About";
import Footer from "./components/Footer";
import Cart from './components/Cart/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Ajouter au panier
  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Supprimer du panier
  const handleRemoveFromCart = (indexToRemove) => {
    const newCart = cartItems.filter((_, index) => index !== indexToRemove);
    setCartItems(newCart);
  };
  //pour vider le panier
  const handleClearCart = () => {
    setCartItems([]);
  };
  
  return (
    <div>
      <Header cartItemCount={cartItems.length} />
      <Hero />
      <FeaturedProducts onAddToCart={handleAddToCart} />
      <Categories />
      <About />
      <Footer />
      <Cart cartItems={cartItems} onRemove={handleRemoveFromCart} onClearCart={handleClearCart} />

    </div>
  );
}

export default App;*/

import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Categories from "./components/Categories";
import About from "./components/About";
import Footer from "./components/Footer";
import Cart from './components/Cart/Cart';

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
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
