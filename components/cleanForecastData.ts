export default function cleanForecastData(
  forecast: any,
  numberOfDays?: number
) {
  const forecastProjection = {} as Forecast;
  forecastProjection.location = `${forecast.name}, ${forecast.region}`;
  forecastProjection.current = forecast.current;

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

    console.log(futureForecast);

    forecastProjection.futureForecast.push(futureForecast);
  }

  return forecastProjection;
}
