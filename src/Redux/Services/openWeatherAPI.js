import axios from "axios";

const openWeatherAPI = {};

openWeatherAPI.getCountrybyCountryName = async (
  searchString,
  unit = "metric"
) => {
  const endpoint = `//api.openweathermap.org/data/2.5/weather?q=${searchString}&units=${unit}&appid=fe59f54d9745f8b87580dcc5b70f2ed0`;
  try {
    const response = await axios.get(`${endpoint}`);
    if (response.data) {
      return [null, response.data];
    } else {
      return [{ message: "Sorry, no results found" }, null];
    }
  } catch (e) {
    return [{ message: "Error when fetching properties" }, null];
  }
};

export default openWeatherAPI;
