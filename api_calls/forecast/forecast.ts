export default async function forecast(zipcode: string, numberOfDays?: string) {
  let response;

  if (typeof numberOfDays === "undefined") {
    response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?q${zipcode}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${process.env.key}` },
      }
    );
  } else {
    response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?q${zipcode}&days=${numberOfDays}`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${process.env.key}` },
      }
    );
  }

  const data = await response.json();

  return data;
}
