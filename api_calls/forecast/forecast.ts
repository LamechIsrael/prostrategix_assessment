export default async function fetchForecast(
  zipcode: number,
  numberOfDays?: number
) {
  let response;

  if (typeof numberOfDays === "undefined") {
    response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?q=${zipcode}`,
      {
        method: "GET",
        headers: {
          key: `${process.env.key as string}`,
        },
      }
    );
  } else {
    console.log("Get forecast");
    numberOfDays = 1;
    response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?q=${zipcode}&days=${numberOfDays}`,
      {
        method: "GET",
        headers: {
          key: `${process.env.key}`,
        },
      }
    );
  }

  const data = await response.json();

  return data;
}
