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
export const { searched, searchComplete } = SearchSlice.actions;
export const search = (searchString, unit) => async (dispatch) => {
  try {
    const results = await openWeatherAPI.getCountrybyCountryName(
      searchString,
      unit
    );
    dispatch(searchComplete(results[1]));
  } catch (error) {
    return [error];
  }
};

export const searchedData = (state) => state.data.searched;

export default SearchSlice.reducer;
