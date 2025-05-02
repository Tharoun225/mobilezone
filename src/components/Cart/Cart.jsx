import React from "react";

const Cart = ({ cartItems, onRemove, onClearCart }) => {
  const total = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(' €', '').replace(',', '.'));
    return acc + price;
  }, 0);

  return (
    <section className="cart">
      <h2 className="cart-title">Panier 🛒</h2>
      {cartItems.length === 0 ? (
        <p className="cart-empty">Votre panier est vide.</p>
      ) : (
        <div className="cart-list">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-info">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">{item.price}</p>
                <button
                  onClick={() => onRemove(index)}
                  className="cart-remove-button"
                >
                  Retirer
                </button>
              </div>
            </div>
          ))}
          <p className="cart-total">Total : {total.toFixed(2)} €</p>
          <button onClick={onClearCart} className="cart-clear-button">
            Vider le panier
          </button>
        </div>
      )}
    </section>
  );
};

export default Cart;

