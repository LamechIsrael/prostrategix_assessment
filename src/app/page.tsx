"use client";

import { useEffect, useState } from "react";
import getForcast from "../../components/getForecast";
import CityForm from "../../components/page_components/city_form";
import TotalCityComponent from "../../components/page_components/total_city_component";
import { emptyForecastProjection } from "../../components/empty_variables/forecastProjection";

export default function Home() {
  const [zipcode, setZipCode] = useState<number>();
  const [forecastData, setForecast] = useState<Forecast>();
  const [tempUnit, setUnit] = useState<string>();

  useEffect(() => {
    if (zipcode) {
      const forecast = getForcast(zipcode, 5).then((data) =>
        setForecast(data as unknown as Forecast)
      );
    }
  });

  function submitForm(event: React.FormEvent) {
    event.preventDefault();
    // Get the data that is in the form
    const fd = new FormData(event.target as any);
    // Turn the form data into an object of named key-value pairs
    const data = Object.fromEntries(fd.entries());
    const zipcode = parseInt(data["zipcode"] as string);
    const unit = data["temp"] as string;

    setUnit(unit);
    setZipCode(zipcode);
  }

  return (
    <div className="homePage">
      <div className={"cityForm"}>
        <CityForm submitFormHandler={submitForm} />
      </div>
      <div className="forecast">
        {forecastData ? (
          <TotalCityComponent
            temperature={
              tempUnit === "F"
                ? forecastData?.current.temp_f
                : forecastData.current.temp_c
            }
            forecast={forecastData}
            unit={tempUnit as "F" | "C"}
          />
        ) : (
          <TotalCityComponent
            temperature={0}
            forecast={emptyForecastProjection}
            unit={"F"}
          />
        )}
      </div>
    </div>
  );
}
