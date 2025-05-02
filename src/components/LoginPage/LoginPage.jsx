import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(`Bienvenue ${email} ! Vous êtes connecté.`);
    setEmail("");
    setPassword("");
  };

  return (
    <section className="login">
      <h2 className="login-title">Connexion</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          required
        />
        <button type="submit" className="login-button">
          Se connecter
        </button>
      </form>
      {successMessage && <p className="login-success">{successMessage}</p>}
    </section>
  );
};

export default LoginPage;

