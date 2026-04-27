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

export default function HourlyForecast({ coords }: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather", coords],
    queryFn: () => getWeahter({ lat: coords.lat, lon: coords.lon }),
  });

  const { unit } = useTemperatureUnit();

  return (
    <Card
      title="Hourly Forecast (48 Hrs)"
      childrenClassName="flex gap-6 overflow-x-scroll"
    >
      {data.hourly.map((hour) => (
        <div key={hour.dt} className="flex flex-col gap-2 items-center p-2">
          <p className="whitespace-nowrap">
            {new Date(hour.dt * 1000).toLocaleTimeString(undefined, {
              hour: "numeric",
              hour12: true,
              timeZone: data.timezone,
            })}
          </p>
          <WeatherIcon src={hour.weather[0].icon} />
          <p>{formatTemp(Math.round(hour.temp), unit)}</p>
        </div>
      ))}
    </Card>
  );
}
