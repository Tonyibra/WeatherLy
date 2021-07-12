import React from "react";
import SearchBox from "../Search/SearchBox";
import styles from "./AppBar.module.scss";
import Celcuis from "../base/weatherUnitsIcons/celsius.svg";
import Fahrenheit from "../base/weatherUnitsIcons/fahrenheit-degrees.svg";
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
        <div className={styles.tempUnits}>
          <div className={styles.celcuis}>
            <img src={Celcuis} />
          </div>
          <div className={styles.fahrenhite}>
            <img src={Fahrenheit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
