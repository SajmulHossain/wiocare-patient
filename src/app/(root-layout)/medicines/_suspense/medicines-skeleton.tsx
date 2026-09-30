import { Skeleton } from "@/components/ui/skeleton";

export default function MedicinesSkeleton() {
  return (
    <section className="bg-muted/30 min-h-screen">
      <div className="section pt-10 pb-16">
        <div className="mb-8">
          <Skeleton className="h-10 w-48 mb-3" />
          <Skeleton className="h-6 w-96 max-w-full" />
        </div>

        {/* Filters skeleton */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Skeleton className="h-10 w-full md:w-1/3" />
          <Skeleton className="h-10 w-full md:w-1/4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl border border-border/50 bg-card text-card-foreground shadow-sm overflow-hidden"
            >
              <Skeleton className="h-48 w-full" />
              <div className="p-5 flex flex-col gap-3">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-full" />
                <div className="flex justify-between items-center mt-2 pt-4 border-t border-border/50">
                  <Skeleton className="h-6 w-1/3" />
                  <Skeleton className="h-9 w-24 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
