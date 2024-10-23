import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.url;

  const urlString = url.split("/");
  const zipcode = urlString[5];

  console.log(process.env.KEY);

  const response = await (
    await fetch(
      `http://api.weatherapi.com/v1/forecast.json?q=${zipcode}&days=5`,
      {
        method: "GET",
        headers: {
          key: process.env.KEY as string,
        },
      }
    )
  ).json();

  return new Response(JSON.stringify(response));
}
