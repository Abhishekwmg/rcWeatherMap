import { useSuspenseQuery } from "@tanstack/react-query";
import { getWeahter } from "../../api";
import Card from "./Cards";

export default function CurrentWeather() {
  const { data } = useSuspenseQuery({
    queryKey: ["weather"],
    queryFn: () => getWeahter({ lat: 50, lon: 10 }),
  });

  return <Card title="Current Weather">Current Weather</Card>;
}
