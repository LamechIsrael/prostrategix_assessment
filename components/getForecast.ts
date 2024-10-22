import fetchForecast from "../api_calls/forecast/forecast";
import cleanForecastData from "./cleanForecastData";

export default async function getForecast(
  zipcode: number,
  numberOfDays?: number
) {
  if (numberOfDays) {
    if (numberOfDays < 3 || numberOfDays > 5) {
      return new Error("The number of days must be between 3 and 5");
    }
  }

  const forecastData = await fetchForecast(zipcode, numberOfDays);

  const simplifiedForecast = cleanForecastData(forecastData, numberOfDays);

  return simplifiedForecast;
}
