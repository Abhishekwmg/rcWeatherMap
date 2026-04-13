import { useQuery } from "@tanstack/react-query";
import { getWeahter } from "./api";
import DailyForecast from "./components/cards/DailyForecasst";
import HourlyForecast from "./components/cards/HourlyForecast";
import CurrentWeather from "./components/cards/CurrentWeather";
import AdditionalInfo from "./components/cards/AdditionalInfo";

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
      <AdditionalInfo />
    </div>
  );
}

export default App;
