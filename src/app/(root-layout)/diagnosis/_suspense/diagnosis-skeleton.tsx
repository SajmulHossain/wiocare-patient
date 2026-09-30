import { Skeleton } from "@/components/ui/skeleton";

export default function DiagnosisSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="bg-background rounded-2xl p-6 border shadow-sm flex flex-col h-62.5"
        >
          <div className="flex justify-between items-start mb-4">
            <Skeleton className="h-12 w-12 rounded-xl" />
            <Skeleton className="h-6 w-20 rounded-full" />
          </div>
          <Skeleton className="h-6 w-3/4 mb-3" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-5/6 mb-6" />
          <div className="mt-auto">
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      ))}
    </div>
  );
}
