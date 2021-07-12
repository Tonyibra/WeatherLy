import { style } from "@material-ui/system";
import React from "react";
import styles from "./Table.module.scss";
const Table = ({ cityData, tempMax, unit }) => {
  const windSpeed = cityData.wind?.speed;
  const humidity = cityData.main?.humidity / 100;
  const Visibility = cityData?.visibility / 1000;
  const sunset = cityData?.sys?.sunset;
  const sunrise = cityData?.sys?.sunrise;

  const deg = cityData?.wind?.deg;
  const formatter = new Intl.NumberFormat("en", {
    style: "unit",
    unit: "kilometer-per-second",
  });
  const HumidityFormatter = new Intl.NumberFormat("en", {
    style: "unit",
    unit: "kilometer",
  });
  const units = new Intl.NumberFormat("en", {
    style: "unit",
    unit: unit,
  });
  const percentage = new Intl.NumberFormat("en", {
    style: "percent",
  });
  const degToCompass = (num) => {
    var val = Math.floor(num / 22.5 + 0.5);
    var arr = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    return arr[val % 16];
  };

  const convertUnixTime = (unix_timestamp) => {
    var date = new Date(unix_timestamp * 1000);
    var hours = date.getHours();

    var minutes = "0" + date.getMinutes();
    var formattedTime = hours + ":" + minutes.substr(-2);
    return formattedTime;
  };

  const convertToFeh = (getTemp) => {
    const cToFahr = (getTemp * 9) / 5 + 32;
    return cToFahr;
  };

  return (
    <div className={styles.tableContainer}>
      <div className={styles.col}>
        <div className={styles.row}>
          <span>Wind</span>
          <span>{`${degToCompass(deg)} ${formatter.format(windSpeed)}`}</span>
        </div>
        <div className={styles.row}>
          <span>Temp Max</span>
          <span>
            {unit !== "fahrenheit"
              ? units.format(tempMax)
              : units.format(convertToFeh(tempMax))}
          </span>
        </div>
        <div className={styles.row}>
          <span>Humidity</span>
          <span>{percentage.format(humidity)}</span>
        </div>
        <div className={styles.row}>
          <span>Visibility</span>
          <span>{HumidityFormatter.format(Visibility)}</span>
        </div>
        <div className={styles.row}>
          <span>Sunset</span>
          <span>{`${convertUnixTime(sunset)} AM`}</span>
        </div>
        <div className={styles.row}>
          <span>Sunrise</span>
          <span>{`${convertUnixTime(sunrise)} PM`}</span>
        </div>
      </div>
    </div>
  );
};

export default Table;
