import { useQuery } from "@tanstack/react-query";
import { getWeahter } from "./api";
import Card from "./components/cards/Cards";
import DailyForecast from "./components/cards/DailyForecasst";
import HourlyForecast from "./components/cards/HourlyForecast";
import CurrentWeather from "./components/cards/CurrentWeather";

function App() {
  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeahter({ lat: 50, lon: 10 }),
  });

  return (
    <div className="flex flex-col gap-8">
      <CurrentWeather />
      <HourlyForecast />
      <DailyForecast />
    </div>
  );
}

export default App;
