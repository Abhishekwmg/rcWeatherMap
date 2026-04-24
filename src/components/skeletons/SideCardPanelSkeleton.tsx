import Card from "../cards/Cards";
import { Skeleton } from "../ui/skeleton";

export default function SideCardPanelSkeleton() {
  return (
    <Card className="hover:scale-103 cursor-pointer transition-transform duration-300 from-sidebar-accent to-sidebar-accent/60 gap-0!">
      <div className="flex justify-between">
        <Skeleton className="w-12 h-7" />
        <Skeleton className="w-12 h-7" />
      </div>
      <Skeleton className="w-full h-1.5" />
      <div className="gap-4 flex justify-between text-xs">
        <Skeleton className="w-2 h-4" />
        <Skeleton className="w-2 h-4" />
      </div>
      <div className="flex justify-between">
        {Array.from({ length: 5 }).map((_, index) => (
          <Skeleton key={index} className="w-15 h-6" />
        ))}
      </div>
    </Card>
  );
}
