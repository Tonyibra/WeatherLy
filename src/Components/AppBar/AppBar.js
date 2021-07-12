import React, { useState } from "react";
import SearchBox from "../Search/SearchBox";
import styles from "./AppBar.module.scss";
import Celcuis from "../base/weatherUnitsIcons/celsius.svg";
import Fahrenheit from "../base/weatherUnitsIcons/fahrenheit-degrees.svg";
const AppBar = () => {
  const fahrenheit = "F";
  const celcuis = "C";
  const [tempUnit, setTempUnit] = useState("C");

  const changeTempUnitHandler = (unit) => {
    setTempUnit(unit);
  };

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
            <img src={Celcuis} onClick={() => changeTempUnitHandler(Celcuis)} />
          </div>
          <div className={styles.fahrenhite}>
            <img
              src={Fahrenheit}
              onClick={() => changeTempUnitHandler(fahrenheit)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
