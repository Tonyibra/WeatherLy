import React from "react";
import styles from "./WeeklyData.module.scss";
const WeeklyData = ({ dailyData, unit }) => {
  const temp = Math.floor(dailyData?.temp?.max);
  const tempLow = Math.floor(dailyData?.temp?.min);
  const unixTime = dailyData?.dt;
  const date = new Date(unixTime * 1000);
  const description = dailyData?.weather[0].description;
  const iconId = dailyData?.weather[0].icon;
  // const units = new Intl.NumberFormat("en", {
  //   style: "unit",
  //   unit: `${unit}`,
  // });
  const convertToFeh = (temp) => {
    const cToFahr = (temp * 9) / 5 + 32;
    return cToFahr;
  };

  const displayOpenWeatherApiIcons = (iconId) => {
    var iconurl = "http://openweathermap.org/img/w/" + iconId + ".png";
    return iconurl;
  };
  return (
    <div className={styles.weeklyBox}>
      <span className={styles.date}>{date.toString().split("GMT")[0]}</span>
      <span className={styles.temp}>
        {unit !== "fahrenheit" ? `${temp}°C` : `${convertToFeh(temp)}°F`}
        <span className={styles.lowTemp}>
          /
          {unit !== "fahrenheit"
            ? `${tempLow}°c`
            : `${convertToFeh(tempLow)}°f`}
        </span>
        <div className={styles.weatherIco}>
          <img src={displayOpenWeatherApiIcons(iconId)} alt="" />
        </div>
      </span>
      <span>{description}</span>
    </div>
  );
};

export default WeeklyData;
