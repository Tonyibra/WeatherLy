import React from "react";
import styles from "./WeatherCard.module.scss";
import moment from "moment";
import Table from "../Table/Table";
const WeatherCard = ({ cityData }) => {
  console.log(cityData);
  const date = moment().format("LT");
  const getTemp = Math.floor(cityData.main?.temp);
  const tempMax = Math.floor(cityData.main?.temp_max);
  const realFeel = Math.floor(cityData.main?.feels_like);
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
        <span className={styles.reelFeel}>{`RealFeel®:${realFeel}`}</span>
      </div>
      <Table cityData={cityData} tempMax={tempMax} />
    </div>
  );
};

export default WeatherCard;
