/*import React from "react";

/*const Header = ({ cartItemCount }) => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>📱 MobileZone</div>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Accueil</Link>
        <Link to="/products" style={styles.link}>Produits</Link>
        <a href="#cart" style={{ ...styles.link, position: "relative" }}>
          Panier 🛒
          {cartItemCount > 0 && (
            <span style={styles.badge}>{cartItemCount}</span>
          )}
        </Link>
        <a href="#login" style={styles.link}>Connexion</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#0a0a23",
    color: "#fff",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "24px",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: "-8px",
    right: "-12px",
    backgroundColor: "red",
    color: "#fff",
    borderRadius: "50%",
    padding: "2px 6px",
    fontSize: "12px",
    fontWeight: "bold",
  },
};

export default Header;*/

import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cartItemCount }) => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>📱 MobileZone</div>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Accueil</Link>
        <Link to="/products" style={styles.link}>Produits</Link>
        <Link to="/categories" style={styles.link}>Catégories</Link>
        <Link to="/about" style={styles.link}>À propos</Link>
        <Link to="/cart" style={{ ...styles.link, position: "relative" }}>
          Panier 🛒
          {cartItemCount > 0 && (
            <span style={styles.badge}>{cartItemCount}</span>
          )}
        </Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#0a0a23",
    color: "#fff",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "24px",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
  },
  badge: {
    position: "absolute",
    top: "-8px",
    right: "-12px",
    backgroundColor: "red",
    color: "#fff",
    borderRadius: "50%",
    padding: "2px 6px",
    fontSize: "12px",
    fontWeight: "bold",
  },
};

export default Header;


//({cartItemCount})
//<Link to="/cart" style={styles.link}>Panier🛒</Link>