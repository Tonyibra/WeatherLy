import React, { useEffect } from "react";
import NavTab from "../../Components/NavTab/NavTab";
import AppBar from "../../Components/AppBar/AppBar";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";
import { searchByCityName } from "../../Redux/slices/weatherSlice";
import WeatherCard from "../../Components/City/Details/WeatherCard";
import styles from "./City.module.scss";
const City = ({ city }) => {
  const [unitChanged, setUnitChanged] = React.useState(false);
  const router = useRouter();
  const id = router.query.id;
  const dispatch = useDispatch();
  const cityData = useSelector((state) => state.weather.Data);
  const getData = async () => {
    if (!id) {
      return null;
    }
    await dispatch(searchByCityName(id));
  };
  useEffect(() => {
    getData();
  }, [id]);
  const cityName = cityData.name;
  const countryName = cityData.sys?.country;
  return (
    <div className={styles.cityPage}>
      {Object.keys(cityData).length > 0 && (
        <Head>
          <title>{`Weather | ${cityName},${countryName} Weather `}</title>
        </Head>
      )}
      <AppBar setUnitChanged={setUnitChanged} unitChanged={unitChanged} />
      <NavTab />
      <div className={styles.weatherContainer}>
        <WeatherCard cityData={cityData} unitChanged={unitChanged} />
      </div>
    </div>
  );
};

export default City;
