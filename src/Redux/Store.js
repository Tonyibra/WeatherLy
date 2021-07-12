import { configureStore } from "@reduxjs/toolkit";
import WeatherReducer from "./slices/weatherSlice";
import SearchSliceReducer from "./slices/SearchSlice";
export const store = configureStore({
  reducer: { weather: WeatherReducer, search: SearchSliceReducer },
});
