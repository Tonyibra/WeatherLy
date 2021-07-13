import React from "react";
import styles from "./WeatherCard.module.scss";
import moment from "moment";
import Table from "../Table/Table";
const WeatherCard = ({ cityData, unitChanged, unit, setUnit }) => {
  const date = moment().format("LT");
  const getTemp = Math.floor(cityData?.main?.temp);
  const tempMax = Math.floor(cityData?.main?.temp_max);
  const realFeel = Math.floor(cityData?.main?.feels_like);

  const convertToFeh = (getTemp) => {
    const cToFahr = (getTemp * 9) / 5 + 32;
    return cToFahr;
  };

  const units = new Intl.NumberFormat("en", {
    style: "unit",
    unit: `${unit}`,
  });

  return (
    <div className={styles.weatherCard}>
      <div className={styles.cardHeader}>
        <span>Current Weather</span>
        <div className={styles.date}>
          <span>{date}</span>
        </div>
      </div>
      <div className={styles.temp}>
        <span>
          {unit === "fahrenheit"
            ? units.format(convertToFeh(getTemp))
            : units.format(getTemp)}
        </span>

        <span className={styles.reelFeel}>{`RealFeel®: ${
          unit !== "fahrenheit"
            ? units.format(realFeel)
            : units.format(convertToFeh(realFeel))
        }`}</span>
      </div>
      <Table cityData={cityData} tempMax={tempMax} unit={unit} />
    </div>
  );
};

export default WeatherCard;
