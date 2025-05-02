import React from "react";

const categories = [
  { id: 1, name: "iPhone", emoji: "🍏" },
  { id: 2, name: "Samsung", emoji: "📱" },
  { id: 3, name: "Xiaomi", emoji: "🔋" },
  { id: 4, name: "Accessoires", emoji: "🎧" },
];

const Categories = () => {
  return (
    <section className="categories">
      <h2 className="section-title">Catégories</h2>
      <div className="category-grid">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <span className="category-emoji">{category.emoji}</span>
            <p className="category-name">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
