import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeahter } from "../../api";
import Card from "./Cards";
import WeatherIcon from "../WeatherIcon";

export default function CurrentWeather() {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeahter({ lat: 50, lon: 10 }),
  });

  return (
    <Card
      title="Current Weather"
      childrenClassName="flex flex-col items-center"
    >
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-6xl font-semibold text-center">
          {Math.round(data.current.temp)}°F
        </h2>
        <WeatherIcon src={data.current.weather[0].icon} className="size-14" />
      </div>
    </Card>
  );
}
