import { createSlice } from "@reduxjs/toolkit";
import openWeatherAPI from "../Services/openWeatherAPI";

const initialState = {
  Data: [],
  weekly: [],
};

export const weatherSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    weather: (state, action) => {},
    CityDataComplete: (state, action) => {
      state.loading = false;
      state.loaded = true;
      state.loadingError = false;
      state.searchActive = true;
      state.Data = action.payload;
    },
    CityWeeklyDataComplete: (state, action) => {
      state.loading = false;
      state.loaded = true;
      state.loadingError = false;
      state.searchActive = true;
      state.weekly = action.payload;
    },
  },
});
export const { weather, CityDataComplete, CityWeeklyDataComplete } =
  weatherSlice.actions;

export const searchByCityName = (city, unit) => async (dispatch) => {
  try {
    const results = await openWeatherAPI.getCountrybyCountryName(city, unit);
    dispatch(CityDataComplete(results[1]));
  } catch (error) {
    return [error];
  }
};
export const weeklyWeather = (lon, lat, unit) => async (dispatch) => {
  try {
    const results = await openWeatherAPI.getWeeklyWeather(lon, lat, unit);
    console.log(results);
    console.log(lon, lat);
    dispatch(CityWeeklyDataComplete(results[1]));
  } catch (error) {
    return [error];
  }
};

export const selectData = (state) => state.data.weather;

export default weatherSlice.reducer;
