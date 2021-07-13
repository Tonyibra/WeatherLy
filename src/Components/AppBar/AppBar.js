import React, { useState } from "react";
import SearchBox from "../Search/SearchBox";
import styles from "./AppBar.module.scss";
import Celcuis from "../base/weatherUnitsIcons/celsius.svg";
import Fahrenheit from "../base/weatherUnitsIcons/fahrenheit-degrees.svg";
import { useRouter } from "next/router";
const AppBar = ({ unitChanged, setUnitChanged }) => {
  const router = useRouter();
  const fahrenheit = "fahrenheit";
  const celcuis = "celsius";
  const [tempUnit, setTempUnit] = useState("celsius");

  const changeTempUnitHandler = (unit) => {
    localStorage.setItem("temp", unit);
    setTempUnit(unit);
    setUnitChanged(!unitChanged);
  };

  const mainPageHandler = () => {
    router.push("/");
  };
  return (
    <div className={styles.navContainer}>
      <div className={styles.navContent}>
        <div className={styles.logo} onClick={mainPageHandler}>
          <span>Weatherly</span>
        </div>
        <div className={styles.serarchContainer}>
          <SearchBox />
        </div>
        {router.asPath !== "/" && (
          <div className={styles.tempUnits}>
            <div className={styles.celcuis}>
              <img
                src={Celcuis}
                onClick={() => changeTempUnitHandler(celcuis)}
              />
            </div>
            <div className={styles.fahrenhite}>
              <img
                src={Fahrenheit}
                onClick={() => changeTempUnitHandler(fahrenheit)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppBar;
