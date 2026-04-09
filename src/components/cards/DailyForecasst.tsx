import Card from "./Cards";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeahter } from "../../api";
type Props = {};

export default function DailyForecast({}: Props) {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeahter({ lat: 50, lon: 10 }),
  });

  return (
    <Card title="Daily Forecast" childrenClassName="flex flex-col gap-4">
      {data?.daily.map((day) => (
        <div key={day.dt} className="flex justify-between gap-4">
          <p className="w-9">
            {new Date(day.dt * 1000).toLocaleDateString(undefined, {
              weekday: "short",
            })}
          </p>
          <img
            className="size-8"
            src={`https://openweathermap.org/payload/api/media/file/${day.weather[0].icon}.png`}
            alt="Weather Icon"
          />
          <p>{Math.round(day.temp.day)}°F</p>
          <p className="text-gray-500/75">{Math.round(day.temp.min)}°F</p>
          <p className="text-gray-500/75">{Math.round(day.temp.max)}°F</p>
        </div>
      ))}
    </Card>
  );
}
