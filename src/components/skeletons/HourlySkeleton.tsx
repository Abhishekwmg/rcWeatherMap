import Card from "../cards/Cards";
import { Skeleton } from "../ui/skeleton";

export default function HourlySkeleton() {
  return (
    <Card
      title="Hourly Forecast (48 Hrs)"
      childrenClassName="flex gap-6 overflow-x-scroll"
    >
      {Array.from({ length: 48 }).map((_, index) => (
        <div key={index} className="flex flex-col gap-2 items-center p-2">
          {/* <p className="whitespace-nowrap">
            {new Date(hour.dt * 1000).toLocaleTimeString(undefined, {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </p> */}
          <Skeleton className="w-15 h-6" />
          <Skeleton className="size-8" />
          {/* <WeatherIcon src={hour.weather[0].icon} /> */}
          <Skeleton className="w-8 h-6" />
          {/* <p>{Math.round(hour.temp)}°F</p> */}
        </div>
      ))}
    </Card>
  );
}
