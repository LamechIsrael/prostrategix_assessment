import FiveDayForcast from "./5-day-forecast";
import CityInfo from "./city_info";

interface CityData {
  temperature: number;
  forecast: Forecast;
  unit: "F" | "C";
}

export default function TotalCityComponent({
  temperature,
  forecast,
  unit,
}: CityData) {
  return (
    <div className="currentCityForecast">
      <CityInfo
        temperature={temperature}
        unit={unit}
        location={forecast.location}
        icon={forecast.current.icon}
      />
      <div className="fiveDayForecastGroup">
        <FiveDayForcast forecast={forecast.futureForecast} unit={unit} />
      </div>
    </div>
  );
}
