import { style } from "@material-ui/system";
import React from "react";
import styles from "./Table.module.scss";
const Table = ({ cityData, tempMax }) => {
  const windSpeed = cityData.wind?.speed;
  const humidity = cityData.main?.humidity / 100;
  const formatter = new Intl.NumberFormat("en", {
    style: "unit",
    unit: "kilometer-per-second",
  });
  const units = new Intl.NumberFormat("en", {
    style: "unit",
    unit: "celsius",
  });
  const percentage = new Intl.NumberFormat("en", {
    style: "percent",
  });
  return (
    <div className={styles.tableContainer}>
      <div className={styles.col}>
        <div className={styles.row}>
          <span>Wind</span>
          <span>{formatter.format(windSpeed)}</span>
        </div>
        <div className={styles.row}>
          <span>Temp Max</span>
          <span>{units.format(tempMax)}</span>
        </div>
        <div className={styles.row}>
          <span>Humidity</span>
          <span>{percentage.format(humidity)}</span>
        </div>
      </div>
    </div>
  );
};

export default Table;
