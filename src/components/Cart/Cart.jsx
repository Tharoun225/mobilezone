import React from "react";

const Cart = ({ cartItems, onRemove, onClearCart }) => {
  // Calcul du total
  const total = cartItems.reduce((acc, item) => {
    // On enlève les espaces et le "€", puis on convertit en nombre
    const price = parseFloat(item.price.replace(' €', '').replace(',', '.'));
    return acc + price;
  }, 0);

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Panier🛒</h2>
      {cartItems.length === 0 ? (
        <p style={styles.emptyCart}>Votre panier est vide.</p>
      ) : (
        <div style={styles.cartList}>
          {cartItems.map((item, index) => (
            <div key={index} style={styles.cartItem}>
              <img src={item.image} alt={item.name} style={styles.itemImage} />
              <div>
                <h3 style={styles.itemName}>{item.name}</h3>
                <p style={styles.itemPrice}>{item.price}</p>
                <button
                  onClick={() => onRemove(index)}
                  style={styles.removeButton}
                >
                  Retirer
                </button>
              </div>
            </div>
          ))}
          <p style={styles.total}>Total : {total.toFixed(2)} €</p>
          <button onClick={onClearCart} style={styles.clearButton}>
            Vider le panier
          </button>
        </div>
      )}
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
  emptyCart: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  cartList: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  cartItem: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  itemImage: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "8px",
    marginRight: "20px",
  },
  itemName: {
    fontSize: "1.2rem",
    margin: "10px 0",
  },
  itemPrice: {
    fontWeight: "bold",
    marginBottom: "10px",
  },
  removeButton: {
    padding: "8px 16px",
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  clearButton: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#0a0a23",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  total: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginTop: "20px",
  },
};

export default Cart;

