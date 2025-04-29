import React from "react";

const products = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    price: "1 299 €",
    image:
      "https://images.unsplash.com/photo-1660847739489-3a92dfb582a0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Samsung Galaxy S22",
    price: "999 €",
    image:
      "https://images.unsplash.com/photo-1642513836559-f0b6595b9e88?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Xiaomi 13 Pro",
    price: "799 €",
    image:
      "https://images.unsplash.com/photo-1636919256353-27fa24b7203e?auto=format&fit=crop&w=800&q=80",
  },
];

const FeaturedProducts = () => {
  return (
    <section style={styles.section} id="products">
      <h2 style={styles.title}>Produits en Vedette</h2>
      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <h3 style={styles.name}>{product.name}</h3>
            <p style={styles.price}>{product.price}</p>
            <button style={styles.button}>Acheter</button>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "60px 20px",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "40px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  name: {
    fontSize: "1.2rem",
    margin: "15px 0 10px",
  },
  price: {
    fontWeight: "bold",
    marginBottom: "10px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#0a0a23",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default FeaturedProducts;
