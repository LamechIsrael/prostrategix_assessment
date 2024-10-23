export const emptyForecastProjection: Forecast = {
  location: "",
  futureForecast: {
    day1: { date: "", avgtemp_c: 0, avgtemp_f: 0, condition: "", icon: "" },
    day2: { date: "", avgtemp_c: 0, avgtemp_f: 0, condition: "", icon: "" },
    day3: { date: "", avgtemp_c: 0, avgtemp_f: 0, condition: "", icon: "" },
    day4: { date: "", avgtemp_c: 0, avgtemp_f: 0, condition: "", icon: "" },
    day5: { date: "", avgtemp_c: 0, avgtemp_f: 0, condition: "", icon: "" },
  },
  current: { condition: "", icon: "", temp_c: 0, temp_f: 0 },
};
