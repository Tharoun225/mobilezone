import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>📱 MobileZone</div>
      <nav style={styles.nav}>
        <a href="#home" style={styles.link}>Accueil</a>
        <a href="#products" style={styles.link}>Produits</a>
        <a href="#cart" style={styles.link}>Panier</a>
        <a href="#login" style={styles.link}>Connexion</a>
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
};

export default Header;
