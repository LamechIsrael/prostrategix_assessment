import { emptyForecastProjection } from "./empty_variables/forecastProjection";

export default function cleanForecastData(
  forecast: any,
  numberOfDays?: number
) {
  const forecastProjection = emptyForecastProjection;

  forecastProjection.location = `${forecast.location.name}, ${forecast.location.region}`;

  forecastProjection.current.temp_c = forecast.current.temp_c;
  forecastProjection.current.temp_f = forecast.current.temp_f;
  forecastProjection.current.condition = forecast.current.condition.text;
  forecastProjection.current.icon = forecast.current.condition.icon;

  const data = forecast.forecast.forecastday;

  numberOfDays = numberOfDays ?? 1;

  for (let i = 0; i < numberOfDays; i++) {
    const day = `day${i + 1}`;

    const futureForecast = {
      date: data[i].date,
      avgtemp_c: data[i].day.avgtemp_c,
      avgtemp_f: data[i].day.avgtemp_f,
      condition: data[i].day.condition.text,
      icon: data[i].day.condition.icon,
    } as FutureForecast;

    (forecastProjection.futureForecast as any)[day] = futureForecast;
  }

  return forecastProjection;
}
