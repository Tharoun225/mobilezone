import './App.css';
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Categories from "./components/Categories";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedProducts />
      <Categories />
      <About />
      <Footer />
    </div>
  );
}

export default App;
