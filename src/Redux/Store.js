import { configureStore } from "@reduxjs/toolkit";
import WeatherReducer from "./slices/weatherSlice";
export const store = configureStore({
  reducer: { weather: WeatherReducer },
});
