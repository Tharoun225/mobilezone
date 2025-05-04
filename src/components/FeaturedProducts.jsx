import React from "react";

const products = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    price: "1 299 €",
    image:
      "https://images.unsplash.com/photo-1680687688158-e9165395ff00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXBob25lJTIwMTQlMjBwcm8lMjB2aW9sZXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    name: "Samsung Galaxy S22",
    price: "999 €",
    image:
      "https://images.unsplash.com/photo-1707438095902-cc23b01ac7a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFNhbXN1bmclMjBHYWxheHklMjBTMjJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Xiaomi 13 Pro",
    price: "799 €",
    image:
      "https://images.unsplash.com/photo-1658817774203-341b9b9e67a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8WGlhb21pJTIwMTMlMjBwcm98ZW58MHx8MHx8fDA%3D",
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
