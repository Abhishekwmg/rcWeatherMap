import DailyForecast from "./components/cards/DailyForecasst";
import HourlyForecast from "./components/cards/HourlyForecast";
import CurrentWeather from "./components/cards/CurrentWeather";
import AdditionalInfo from "./components/cards/AdditionalInfo";
import Map from "./components/Map";
import { useState } from "react";
import type { Coords } from "./types";
import LocationDropdown from "./components/dropdowns/LocationDropdown";
import { getGeocode } from "./api";
import { useQuery } from "@tanstack/react-query";

function App() {
  const [coordinates, setCoords] = useState<Coords>({
    lat: 48,
    lon: 2,
  });
  const [location, setLocation] = useState("Mumbai");

  const { data: geocodeData } = useQuery({
    queryKey: ["geocode", location],
    queryFn: () => getGeocode(location),
  });

  const onMapClick = (lat: number, lon: number) => {
    setCoords({ lat, lon });
    setLocation("custom");
  };

  const coords =
    location === "custom"
      ? coordinates
      : { lat: geocodeData?.[0]?.lat ?? 0, lon: geocodeData?.[0]?.lon ?? 0 };

  console.log(coords);

  return (
    <div className="flex flex-col gap-8">
      <LocationDropdown />
      <Map onMapClick={onMapClick} coords={coords} />
      <CurrentWeather coords={coords} />
      <HourlyForecast coords={coords} />
      <DailyForecast coords={coords} />
      <AdditionalInfo coords={coords} />
    </div>
  );
}

export default App;
