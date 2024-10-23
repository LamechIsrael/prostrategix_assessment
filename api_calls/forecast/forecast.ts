import { headers } from "next/headers";

export default async function fetchForecast(
  zipcode: number,
  numberOfDays?: number
) {
  const data = await (await fetch(`/api/get_weather/${zipcode}`)).json();

  return data;
}
