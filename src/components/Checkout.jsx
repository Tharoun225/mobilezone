import React, { useState } from "react";

const Checkout = ({ cartItems, onPlaceOrder }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price.replace(/\s/g, '').replace('€', '')), 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !address) {
      alert("Veuillez remplir tous les champs.");
      return;
    }
    if (cartItems.length === 0) {
      alert("Votre panier est vide.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      onPlaceOrder({ name, email, address, items: cartItems });
      setSuccessMessage("🎉 Merci pour votre commande ! Nous vous contacterons bientôt.");
      setName("");
      setEmail("");
      setAddress("");
      setIsSubmitting(false);
    }, 1500); // Simulation d'une requête réseau
  };

  return (
    <section className="checkout">
      <h2 className="checkout-title">Validation de la commande</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Votre panier est vide.</p>
      ) : (
        <>
          <ul className="checkout-items">
            {cartItems.map((item) => (
              <li key={item.id} className="checkout-item">
                <span>{item.name}</span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
          <p className="checkout-total">Total: {totalPrice.toFixed(2)} €</p>

          <form className="checkout-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Adresse"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Validation en cours..." : "Passer la commande"}
            </button>
          </form>
        </>
      )}

      {successMessage && <p className="checkout-success">{successMessage}</p>}
    </section>
  );
};

export default Checkout;
