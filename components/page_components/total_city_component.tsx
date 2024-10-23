import FiveDayForcast from "./5-day-forecast";
import CityInfo from "./city_info";

export default function TotalCityComponent(
  temperature: number,
  forecast: Forecast,
  unit: "F" | "C"
) {
  return (
    <div>
      <CityInfo
        temperature={temperature}
        unit={unit}
        location={forecast.location}
        icon={forecast.current.icon}
      />
      <FiveDayForcast forecast={forecast.futureForecast} unit={unit} />
    </div>
  );
}
