import DailyForecastSummary from "./forecast_summary";

interface ForecastData {
  forecast: FutureForecastGroup;
  unit: "F" | "C";
}

export default function FiveDayForcast({ forecast, unit }: ForecastData) {
  return (
    <div>
      <div className="fiveDayForecast">
        <DailyForecastSummary forecastDay={forecast.day1} unit={unit} />
        <DailyForecastSummary forecastDay={forecast.day2} unit={unit} />
        <DailyForecastSummary forecastDay={forecast.day3} unit={unit} />
        <DailyForecastSummary forecastDay={forecast.day4} unit={unit} />
        <DailyForecastSummary forecastDay={forecast.day5} unit={unit} />
      </div>

      <h1>5-day Forecast</h1>
    </div>
  );
}
