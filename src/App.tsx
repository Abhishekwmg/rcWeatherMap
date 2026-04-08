import { useQuery } from "@tanstack/react-query";
import { getWeahter } from "./api";
import Card from "./components/cards/Cards";

function App() {
  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeahter({ lat: 50, lon: 10 }),
  });

  return (
    <div className="flex flex-col gap-8">
      <Card title="Current Weather">
        {JSON.stringify(data?.current).slice(0, 100)}
      </Card>
      <Card title="Hourly Forecast (48 Hours)">
        {JSON.stringify(data?.hourly).slice(0, 100)}
      </Card>
      <Card title="Daily Forecast">
        {JSON.stringify(data?.daily).slice(0, 100)}
      </Card>
    </div>
  );
}

export default App;
