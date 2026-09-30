import { Skeleton } from "@/components/ui/skeleton";

export default function BookAppointmentSkeleton() {
  return (
    <section className="bg-muted/10 min-h-screen">
      <div className="section py-12 md:py-20">
        <div className="bg-card rounded-3xl p-6 md:p-10 border border-border/50 shadow-xl shadow-primary/5">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <Skeleton className="w-8 h-8 rounded-full" />
            <Skeleton className="w-64 h-8" />
          </div>

          <div className="flex flex-col gap-10">
            {/* Mocking two days of schedules */}
            {[1, 2].map((i) => (
              <div key={i} className="flex flex-col gap-5">
                {/* Date Header Skeleton */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 border-b border-border/50 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-6 bg-primary/20 rounded-full hidden sm:block"></div>
                    <Skeleton className="w-48 h-6" />
                  </div>
                  <Skeleton className="w-24 h-6 rounded-full" />
                </div>

                {/* Slots Grid Skeleton */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                  {[1, 2, 3, 4, 5, 6].map((j) => (
                    <div
                      key={j}
                      className="flex flex-col items-center justify-center p-3 rounded-2xl border border-border/40 bg-card/50"
                    >
                      <Skeleton className="w-16 h-5 mb-1.5" />
                      <Skeleton className="w-20 h-3" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Form Skeleton */}
          <div className="pt-6 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4 mt-8">
            <Skeleton className="w-64 h-4" />
            <Skeleton className="w-full sm:w-48 h-14 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
