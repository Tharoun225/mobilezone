import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="text">© 2025 MobileZone. Tous droits réservés.</p>
        <div className="socials">
          <a href="https://www.facebook.com" className="icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com" className="icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.twitter.com" className="icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
