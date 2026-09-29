import { Skeleton } from "@/components/ui/skeleton";

export default function DoctorsSkeleton() {
  return (
    <div className="section pt-10 pb-16 min-h-screen">
      <Skeleton className="h-10 w-48 mb-3" />
      <Skeleton className="h-6 w-96 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <Skeleton key={i} className="h-105 w-full rounded-2xl" />
        ))}
      </div>
    </div>
  );
}
