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

const FeaturedProducts = ({ onAddToCart }) => {
  return (
    <section className="featured-products" id="products">
      <h2 className="section-title">Produits en Vedette</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button
              className="product-button"
              onClick={() => onAddToCart(product)}
            >
              Acheter
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
