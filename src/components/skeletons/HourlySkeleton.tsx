import Card from "../cards/Cards";
import { Skeleton } from "../ui/skeleton";

export default function HourlySkeleton() {
  return (
    <Card
      title="Current Weather"
      childrenClassName="flex flex-col items-center gap-4"
    >
      <div className="flex flex-col gap-2 items-center">
        <Skeleton className="w-50 h-15" />
        <Skeleton className="size-14 rounded-full" />
        <Skeleton className="w-36 h-7" />
      </div>
      <div className="flex flex-col gap2">
        <p className="text-xl text-center">Local Time</p>
        <Skeleton className="w-50 h-4" />
      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-500">Feels Like</p>
          <Skeleton className="w-50 h-4" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-500">Humidity</p>
          <Skeleton className="w-50 h-4" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-gray-500">Wind</p>
          <Skeleton className="w-50 h-4" />
        </div>
      </div>
    </Card>
  );
}
