import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cartItemCount }) => {
  return (
    <header className="header">
      <div className="logo">📱 MobileZone</div>
      <nav className="nav">
        <Link to="/" className="link">Accueil</Link>
        <Link to="/products" className="link">Produits</Link>
        <Link to="/categories" className="link">Catégories</Link>
        <Link to="/about" className="link">À propos</Link>
        <Link to="/cart" className="link cart-link">
          Panier 🛒
          {cartItemCount > 0 && (
            <span className="badge">{cartItemCount}</span>
          )}
        </Link>
        <Link to="/login" className="link">Connexion</Link>
        <Link to="/register" className="link">Inscription</Link>
      </nav>
    </header>
  );
};

export default Header;
