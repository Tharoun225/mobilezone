import React from "react";

const Hero = () => {
  return (
    <section style={styles.hero}>
      <div style={styles.content}>
        <h1 style={styles.title}>Découvrez les Meilleurs Smartphones</h1>
        <p style={styles.subtitle}>
          Achetez les derniers modèles Android et iOS aux meilleurs prix.
        </p>
        <a href="#products" style={styles.button}>Voir les produits</a>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    backgroundImage: `url('https://images.unsplash.com/photo-1511707171634-5f897ff02aa9')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "100px 20px",
    color: "#fff",
    textAlign: "center",
  },
  content: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: "40px",
    borderRadius: "10px",
    display: "inline-block",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "30px",
  },
  button: {
    padding: "12px 25px",
    backgroundColor: "#00BFFF",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "bold",
  },
};

export default Hero;
