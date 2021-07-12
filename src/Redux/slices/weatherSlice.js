import { createSlice } from "@reduxjs/toolkit";
import openWeatherAPI from "../Services/openWeatherAPI";

const initialState = {
  Data: [],
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
  },
});
export const { weather, CityDataComplete } = weatherSlice.actions;

export const searchByCityName = (city, unit) => async (dispatch) => {
  try {
    const results = await openWeatherAPI.getCountrybyCountryName(city, unit);
    dispatch(CityDataComplete(results[1]));
  } catch (error) {
    return [error];
  }
};

export const selectData = (state) => state.data.weather;

export default weatherSlice.reducer;
