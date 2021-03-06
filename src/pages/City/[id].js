import React, { useEffect } from "react";
import NavTab from "../../Components/NavTab/NavTab";
import AppBar from "../../Components/AppBar/AppBar";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";
import {
  searchByCityName,
  weeklyWeather,
} from "../../Redux/slices/weatherSlice";
import WeatherCard from "../../Components/City/Details/WeatherCard";
import styles from "./City.module.scss";
import Data from "../../Components/City/Details/Weekly/Data/Data";
import { LinearProgress } from "@material-ui/core";

const City = ({ city }) => {
  const [unitChanged, setUnitChanged] = React.useState(false);
  const [unit, setUnit] = React.useState("celsius");

  const [weekly, setWeekly] = React.useState(false);
  const [today, setToday] = React.useState(true);
  const router = useRouter();
  const id = router.query.id;
  const dispatch = useDispatch();
  const cityData = useSelector((state) => state.weather.Data);
  const weeklyForecast = useSelector((state) => state.weather.weekly?.daily);
  const loading = useSelector((state) => state.weather.loading);
  const coord = {
    lon: cityData?.coord?.lon,
    lat: cityData?.coord?.lat,
  };

  React.useEffect(() => {
    if (!localStorage.getItem("temp")) {
      localStorage.setItem("temp", unit);
    }
  }, []);

  const getData = async () => {
    if (!id) {
      return null;
    }
    await dispatch(searchByCityName(id));
  };

  React.useEffect(() => {
    setUnit(localStorage.getItem("temp"));
  }, []);

  useEffect(() => {
    getData();
  }, [id]);
  useEffect(() => {
    if (coord.lon && coord.lat) {
      dispatch(weeklyWeather(coord.lon, coord.lat));
    }
  }, [id, coord.lon, coord.lat]);
  React.useEffect(() => {
    setUnit(localStorage.getItem("temp"));
  }, [unitChanged]);

  const cityName = cityData?.name;
  const countryName = cityData?.sys?.country;
  return (
    <div className={styles.cityPage}>
      {cityData && Object.keys(cityData).length > 0 && (
        <Head>
          <title>{`Weather | ${cityName},${countryName} Weather `}</title>
        </Head>
      )}
      <>
        {loading && (
          <LinearProgress color="primary" className={styles.loader} />
        )}
        <>
          <AppBar setUnitChanged={setUnitChanged} unitChanged={unitChanged} />
          <NavTab
            setWeekly={setWeekly}
            weekly={weekly}
            today={today}
            setToday={setToday}
          />
          {today && (
            <div className={styles.weatherContainer}>
              <WeatherCard
                unit={unit}
                setUnit={setUnit}
                cityData={cityData}
                unitChanged={unitChanged}
              />
            </div>
          )}

          {weekly && (
            <div className={styles.weatherContainer}>
              <Data weeklyForecast={weeklyForecast} unit={unit} />
            </div>
          )}
        </>
      </>
    </div>
  );
};

export default City;
