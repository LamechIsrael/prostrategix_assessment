type Forecast = {
  location: string;
  current: CurrentForecast;
  futureForecast: FutureForecastGroup;
};

type FutureForecastGroup = {
  day1: FutureForecast;
  day2: FutureForecast;
  day3: FutureForecast;
  day4: FutureForecast;
  day5: FutureForecast;
};
