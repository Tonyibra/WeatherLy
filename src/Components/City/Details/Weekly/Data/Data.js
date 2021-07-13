import React from "react";
import WeeklyData from "../WeeklyData";
import styles from "./Data.module.scss";
const Data = ({ weeklyForecast, unit }) => {
  return (
    <div className={styles.dataList}>
      {weeklyForecast?.map((dailyData, idx) => (
        <WeeklyData key={idx} dailyData={dailyData} unit={unit} />
      ))}
    </div>
  );
};

export default Data;
