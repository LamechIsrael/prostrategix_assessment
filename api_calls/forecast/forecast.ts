export default async function fetchForecast(
  zipcode: number,
  numberOfDays?: number
) {
  let response;

  if (numberOfDays) {
    response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?q=${zipcode}&days=${numberOfDays}`,
      {
        method: "GET",
        headers: {
          key: `${process.env.KEY as string}`,
        },
      }
    );
  } else {
    response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?q=${zipcode}`,
      {
        method: "GET",
        headers: {
          key: `${process.env.KEY as string}`,
        },
      }
    );
  }

  const data = await response.json();

  return data;
}
