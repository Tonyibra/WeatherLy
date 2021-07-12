import React from "react";
import styles from "./WeatherCard.module.scss";
import moment from "moment";
const WeatherCard = ({ cityData }) => {
  console.log(cityData);
  const date = moment().format("LT");
  const getTemp = Math.floor(cityData.main?.temp);
  const getDescription = cityData.weather[0]?.description;
  const Celsius = new Intl.NumberFormat("en", {
    style: "unit",
    unit: "celsius",
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
        <span>{Celsius.format(getTemp)}</span>
      </div>
      <div className={styles.descriptiom}>
        <span>{getDescription}</span>
      </div>
    </div>
  );
};

export default WeatherCard;
