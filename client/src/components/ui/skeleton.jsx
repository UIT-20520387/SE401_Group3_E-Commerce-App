import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn(
        "w-screen h-screen animate-pulse rounded-md bg-muted bg-black",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
