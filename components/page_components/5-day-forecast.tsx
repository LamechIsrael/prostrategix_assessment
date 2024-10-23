interface ForecastData {
  forecast: FutureForecastGroup;
  unit: "F" | "C";
}

export default function FiveDayForcast({ forecast, unit }: ForecastData) {
  return (
    <div>
      <div>
        <img src={forecast.day1.icon} alt="" />
        <div>Date: {forecast.day1.date}</div>
        {unit.toLowerCase() === "c" ? (
          <div>Average Temp: {forecast.day1.avgtemp_c}</div>
        ) : (
          <div>Average Temp: {forecast.day1.avgtemp_f}</div>
        )}
      </div>
      <div>
        <img src={forecast.day2.icon} alt="" />
        <div>Date: {forecast.day2.date}</div>
        {unit.toLowerCase() === "c" ? (
          <div>Average Temp: {forecast.day2.avgtemp_c}</div>
        ) : (
          <div>Average Temp: {forecast.day2.avgtemp_f}</div>
        )}
      </div>
      <div>
        <img src={forecast.day3.icon} alt="" />
        <div>Date: {forecast.day1.date}</div>
        {unit.toLowerCase() === "c" ? (
          <div>Average Temp: {forecast.day3.avgtemp_c}</div>
        ) : (
          <div>Average Temp: {forecast.day3.avgtemp_f}</div>
        )}
      </div>
      <div>
        <img src={forecast.day4.icon} alt="" />
        <div>Date: {forecast.day4.date}</div>
        {unit.toLowerCase() === "c" ? (
          <div>Average Temp: {forecast.day4.avgtemp_c}</div>
        ) : (
          <div>Average Temp: {forecast.day4.avgtemp_f}</div>
        )}
      </div>
      <div>
        <img src={forecast.day5.icon} alt="" />
        <div>Date: {forecast.day5.date}</div>
        {unit.toLowerCase() === "c" ? (
          <div>Average Temp: {forecast.day5.avgtemp_c}</div>
        ) : (
          <div>Average Temp: {forecast.day5.avgtemp_f}</div>
        )}
      </div>

      <h1>5-day Forecast</h1>
    </div>
  );
}
