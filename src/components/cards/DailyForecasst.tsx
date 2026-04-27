import Card from "./Cards";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeahter } from "../../api";
import WeatherIcon from "../WeatherIcon";
import type { Coords } from "../../types";
import { useTemperatureUnit } from "../TemperatureUnitContext";
import { formatTemp } from "../temperature";

type Props = {
  coords: Coords;
};

export default function DailyForecast({ coords }: Props) {
  const { unit } = useTemperatureUnit();

  const { data } = useSuspenseQuery({
    queryKey: ["weather", coords],
    queryFn: () => getWeahter({ lat: coords.lat, lon: coords.lon }),
  });

  return (
    <Card
      title="Daily Forecast"
      childrenClassName="flex flex-col gap-4 2xl:justify-between"
    >
      {data?.daily.map((day) => (
        <div key={day.dt} className="flex justify-between gap-4">
          <p className="w-9">
            {new Date(day.dt * 1000).toLocaleDateString(undefined, {
              weekday: "short",
            })}
          </p>
          <WeatherIcon src={day.weather[0].icon} />
          <p>{formatTemp(Math.round(day.temp.day), unit)}</p>
          <p className="text-gray-500/75">
            {formatTemp(Math.round(day.temp.min), unit)}
          </p>
          <p className="text-gray-500/75">
            {formatTemp(Math.round(day.temp.max), unit)}
          </p>
        </div>
      ))}
    </Card>
  );
}
