// import { useQuery } from "@tanstack/react-query";
// import { getWeahter } from "./api";
import DailyForecast from "./components/cards/DailyForecasst";
import HourlyForecast from "./components/cards/HourlyForecast";
import CurrentWeather from "./components/cards/CurrentWeather";
import AdditionalInfo from "./components/cards/AdditionalInfo";
import Map from "./components/Map";
import { useState } from "react";
import type { Coords } from "./types";

function App() {
  const [coords, setCoords] = useState<Coords>({
    lat: 48,
    lon: 2,
  });

  const onMapClick = (lat: number, lon: number) => {
    setCoords({ lat, lon });
  };

  console.log(coords);

  return (
    <div className="flex flex-col gap-8">
      <Map onMapClick={onMapClick} coords={coords} />
      <CurrentWeather coords={coords} />
      <HourlyForecast coords={coords} />
      <DailyForecast coords={coords} />
      <AdditionalInfo coords={coords} />
    </div>
  );
}

export default App;
