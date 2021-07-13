import React from "react";
import AppBar from "../AppBar/AppBar";
import styles from "../Landing/Landing.module.scss";
const LandingPage = () => {
  return (
    <div className={styles.landingContainer}>
      {/* Header */}
      <AppBar />
      <div className={styles.landingText}>
        <span>Get City's Weather</span>
        <span className={styles.span2}>As Simple as 1 click!</span>
      </div>
    </div>
  );
};

export default LandingPage;
