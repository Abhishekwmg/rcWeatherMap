import Card from "./Cards";
import { Skeleton } from "../ui/skeleton";

export default function DailySkeleton() {
  return (
    <Card title="Daily Forecast" childrenClassName="flex flex-col gap-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="flex justify-between gap-4">
          <Skeleton className="w-9 h-8" />
          <Skeleton className="size-8 rounded-full" />
          <Skeleton className="size-8" />
          <Skeleton className="size-8" />
          <Skeleton className="size-8" />
          {/* <p>{Math.round(day.temp.day)}°F</p>
          <p className="text-gray-500/75">{Math.round(day.temp.min)}°F</p>
          <p className="text-gray-500/75">{Math.round(day.temp.max)}°F</p> */}
        </div>
      ))}
    </Card>
  );
}
