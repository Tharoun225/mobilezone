import React from "react";

const categories = [
  { id: 1, name: "iPhone", emoji: "🍏" },
  { id: 2, name: "Samsung", emoji: "📱" },
  { id: 3, name: "Xiaomi", emoji: "🔋" },
  { id: 4, name: "Accessoires", emoji: "🎧" },
];

const Categories = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Catégories</h2>
      <div style={styles.grid}>
        {categories.map((category) => (
          <div key={category.id} style={styles.card}>
            <span style={styles.emoji}>{category.emoji}</span>
            <p style={styles.name}>{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "50px 20px",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "30px",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
  card: {
    backgroundColor: "#f1f1f1",
    borderRadius: "8px",
    padding: "30px 20px",
    width: "150px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  emoji: {
    fontSize: "2rem",
  },
  name: {
    marginTop: "10px",
    fontSize: "1rem",
    fontWeight: "bold",
  },
};

export default Categories;
