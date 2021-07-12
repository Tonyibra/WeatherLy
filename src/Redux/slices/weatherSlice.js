import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Data: [],
};

export const weatherSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    weather: (state, action) => {},
  },
});
export const { weather } = weatherSlice.actions;
export const selectData = (state) => state.data.weather;

export default weatherSlice.reducer;
