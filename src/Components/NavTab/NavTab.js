import React from "react";
import styles from "./NavTab.module.scss";
const NavTab = () => {
  return (
    <div className={styles.navTabContainer}>
      <div className={styles.mainTitle}>
        Weather <span>Forecast</span>
      </div>
      <div className={styles.daily}>
        <span>Today</span>
      </div>
      <div className={styles.weekly}>
        <span>Weekly</span>
      </div>
    </div>
  );
};

export default NavTab;
