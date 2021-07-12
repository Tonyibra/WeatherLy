import React from "react";
import AppBar from "../AppBar/AppBar";
import styles from "../Landing/Landing.module.scss";
const LandingPage = () => {
  return (
    <div className={styles.landingContainer}>
      {/* Header */}
      <AppBar />
      <main></main>
    </div>
  );
};

export default LandingPage;
