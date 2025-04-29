import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>© 2025 MobileZone. Tous droits réservés.</p>
        <div style={styles.socials}>
          <a href="https://www.facebook.com" style={styles.icon}>🌐</a>
          <a href="https://www.instagram.com" style={styles.icon}>📸</a>
          <a href="https://www.twitter.com" style={styles.icon}>🐦</a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#0a0a23",
    color: "#fff",
    padding: "30px 20px",
    textAlign: "center",
    marginTop: "50px",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  text: {
    fontSize: "1rem",
  },
  socials: {
    marginTop: "20px",
  },
  icon: {
    fontSize: "1.5rem",
    margin: "0 10px",
    textDecoration: "none",
    color: "#fff",
  },
};

export default Footer;
