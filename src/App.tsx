import { useQuery } from "@tanstack/react-query";
import { getWeahter } from "./api";

function App() {
  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeahter({ lat: 50, lon: 10 }),
  });

  return <>{JSON.stringify(data)}</>;
}

export default App;
