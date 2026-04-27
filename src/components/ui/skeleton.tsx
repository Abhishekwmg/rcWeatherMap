import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "dark:bg-accent bg-foreground/25 animate-pulse rounded-md mt-1",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
