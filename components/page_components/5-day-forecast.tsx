interface ForecastData {
  forecast: FutureForecast[];
  unit: "F" | "C";
}

export default function FiveDayForcast({ forecast, unit }: ForecastData) {
  return (
    <div>
      {forecast.map((data) => (
        <>
          <img src={data.icon} alt="" />
          <div>Date: {data.date}</div>
          {unit.toLowerCase() === "c" ? (
            <div>Average Temp: {data.avgtemp_c}</div>
          ) : (
            <div>Average Temp: {data.avgtemp_f}</div>
          )}
        </>
      ))}
      <h1>5-day Forecast</h1>
    </div>
  );
}
