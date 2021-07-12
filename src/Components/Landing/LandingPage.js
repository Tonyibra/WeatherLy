import React from "react";
import AppBar from "../AppBar/AppBar";
import styles from "../Landing/Landing.module.scss";
import NavTab from "../NavTab/NavTab";
const LandingPage = () => {
  return (
    <div className={styles.landingContainer}>
      {/* Header */}
      <AppBar />
      <main>
        <NavTab />
      </main>
    </div>
  );
};

export default LandingPage;
