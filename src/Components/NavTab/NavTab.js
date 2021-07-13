import React from "react";
import styles from "./NavTab.module.scss";
const NavTab = ({ weekly, setWeekly, today, setToday }) => {
  const changeForecastDuration = () => {
    setWeekly(true);
    setToday(false);
  };
  const changeToDaily = () => {
    setToday(true);
    setWeekly(false);
  };
  return (
    <div className={styles.navTabContainer}>
      <div className={styles.mainTitle}>
        Weather <span>Forecast</span>
      </div>
      <div className={styles.flex}>
        <div className={!today ? styles.daily : styles.activeDaily}>
          <span onClick={changeToDaily}>Today</span>
        </div>
        <div className={!weekly ? styles.weekly : styles.activeWeekly}>
          <span onClick={changeForecastDuration}>Weekly</span>
        </div>
      </div>
    </div>
  );
};

export default NavTab;
