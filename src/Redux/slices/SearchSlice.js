import { createSlice } from "@reduxjs/toolkit";
import openWeatherAPI from "../Services/openWeatherAPI";
const initialState = {
  SearchedCountry: [],
  loading: false,
  loaded: false,
};

export const SearchSlice = createSlice({
  name: "searched",
  initialState,
  reducers: {
    search: (state, action) => {},
    searchComplete: (state, action) => {
      state.loading = false;
      state.loaded = true;
      state.loadingError = false;
      state.searchActive = true;
      state.SearchedCountry = action.payload;
    },
  },
});

export const { searched } = SearchSlice.actions;

export const search = (searchString) => async (dispatch) => {
  try {
    const results = await openWeatherAPI.getCountrybyCountryName(searchString);
    dispatch(searchComplete(results));
  } catch (error) {
    return [error];
  }
};

export const searchedData = (state) => state.data.searched;

export default SearchSlice.reducer;
