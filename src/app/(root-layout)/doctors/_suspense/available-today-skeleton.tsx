import { Card } from "@/components/ui/card";

export default function AvailableTodaySkeleton() {
  return (
    <div className="mb-8 rounded-3xl bg-[#eef9fb] p-5 md:p-8 dark:bg-[#1a2c32]/50 animate-pulse">
      {/* Header Skeleton */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/20"></div>
            <div className="h-7 w-40 rounded-md bg-black/5 dark:bg-white/5"></div>
          </div>
          <div className="ml-4 mt-2 h-4 w-52 rounded-md bg-black/5 dark:bg-white/5"></div>
        </div>

        <div className="flex items-center gap-2 hidden sm:flex">
          <div className="h-9 w-9 rounded-full bg-black/5 dark:bg-white/5"></div>
          <div className="h-9 w-9 rounded-full bg-black/5 dark:bg-white/5"></div>
        </div>
      </div>

      {/* Cards Skeleton */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <Card
            key={i}
            className={`flex flex-col gap-3 rounded-2xl bg-card p-3 shadow-sm border-none ${
              i === 2 ? "hidden md:flex" : ""
            } ${i === 3 ? "hidden lg:flex" : ""} ${
              i === 4 ? "hidden xl:flex" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="h-16 w-16 shrink-0 rounded-xl bg-muted/80"></div>
              <div className="flex w-full flex-col justify-center gap-2">
                <div className="h-3 w-3/4 rounded-md bg-muted/80"></div>
                <div className="h-2 w-1/2 rounded-md bg-muted/80"></div>
                <div className="mt-1 flex items-center gap-2">
                  <div className="h-2 w-8 rounded-md bg-muted/80"></div>
                  <div className="h-2 w-12 rounded-md bg-muted/80"></div>
                </div>
              </div>
            </div>
            <div className="h-8 w-full rounded-lg bg-muted/80"></div>
          </Card>
        ))}
      </div>
    </div>
  );
}
