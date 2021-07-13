import React from "react";
import styles from "./WeeklyData.module.scss";
const WeeklyData = ({ dailyData, unit }) => {
  console.log(dailyData);
  const temp = Math.floor(dailyData?.temp?.max);
  const tempLow = Math.floor(dailyData?.temp?.min);
  const unixTime = dailyData?.dt;
  const date = new Date(unixTime * 1000);
  const units = new Intl.NumberFormat("en", {
    style: "unit",
    unit: `${unit}`,
  });
  const convertToFeh = (temp) => {
    const cToFahr = (temp * 9) / 5 + 32;
    return cToFahr;
  };
  return (
    <div className={styles.weeklyBox}>
      <span className={styles.date}>{date.toString().split("GMT")[0]}</span>
      <span className={styles.temp}>
        {unit !== "fahrenheit"
          ? units.format(temp)
          : units.format(convertToFeh(temp))}
        <span className={styles.lowTemp}>
          /
          {unit !== "fahrenheit"
            ? units.format(tempLow)
            : units.format(convertToFeh(tempLow))}
        </span>
      </span>
    </div>
  );
};

export default WeeklyData;
