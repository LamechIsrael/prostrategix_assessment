interface ForecastSummaryProps {
  forecastDay: FutureForecast;
  unit: "F" | "C";
}

export default function DailyForecastSummary({
  forecastDay,
  unit,
}: ForecastSummaryProps) {
  return (
    <div className="fiveDayForecastItem">
      {forecastDay.icon ? <img src={forecastDay.icon} alt="" /> : <></>}
      {forecastDay.date ? <div>Date: {forecastDay.date}</div> : <></>}
      {forecastDay.avgtemp_c || forecastDay.avgtemp_f ? (
        <>
          {unit.toLowerCase() === "c" ? (
            <div>Average Temp: {forecastDay.avgtemp_c}</div>
          ) : (
            <div>Average Temp: {forecastDay.avgtemp_f}</div>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
