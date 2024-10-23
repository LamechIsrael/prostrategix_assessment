interface CityData {
  temperature: number;
  unit: "F" | "C";
  location: string;
  icon: string;
}

export default function CityInfo({
  temperature,
  unit,
  location,
  icon,
}: CityData) {
  return (
    <div>
      <img
        src={icon}
        alt="An image displaying whether the sky is cloudy, sunny, or rainy"
      />
      <h1>
        {temperature} {unit}
      </h1>
      <h1>{location}</h1>
    </div>
  );
}
