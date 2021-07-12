import React from "react";
import SearchBox from "../Search/SearchBox";
import styles from "./AppBar.module.scss";

const AppBar = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navContent}>
        <div className={styles.logo}>
          <span>Weatherly</span>
        </div>
        <div className={styles.serarchContainer}>
          <SearchBox />
        </div>
      </div>
    </div>
  );
};

export default AppBar;
