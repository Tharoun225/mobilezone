import React from "react";

const About = () => {
  return (
    <section style={styles.section} id="about">
      <div style={styles.container}>
        <h2 style={styles.title}>À propos de MobileZone</h2>
        <p style={styles.text}>
          MobileZone est une boutique en ligne spécialisée dans la vente de smartphones
          neufs et reconditionnés. Nous proposons une large gamme de marques populaires
          comme Apple, Samsung, Xiaomi et bien d'autres. Notre mission est de rendre
          la technologie mobile accessible à tous.
        </p>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "60px 20px",
    backgroundColor: "#0a0a23",
    color: "#fff",
    textAlign: "center",
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  text: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
  },
};

export default About;
