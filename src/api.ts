import { WeatherSchema } from "./schemas/weatherSchema";
import { GeocodeSchema } from "./schemas/geocodeSchema";

const API_KEY = import.meta.env.VITE_API_KEY;

export async function getWeahter({ lat, lon }: { lat: number; lon: number }) {
  const res = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,alerts&appid=${API_KEY}`,
  );
  const data = await res.json();
  return WeatherSchema.parse(data);
}

export async function getGeocode({ location: string }) {
  const res = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`,
  );
  const data = await res.json();
  return GeocodeSchema.parse(data);
}
