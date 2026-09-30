import { Suspense } from "react";
import DiagnosisDetails from "./_section/diagnosis-details";
import { Skeleton } from "@/components/ui/skeleton";
import type { IPageProps } from "@/types";

export default function DiagnosisDetailsPage({
  params,
  searchParams,
}: IPageProps<{ slug: string }>) {
  return (
    <section className="bg-muted/20 min-h-screen">
      <div className="section pt-10 pb-16">
        <Suspense 
          fallback={
            <div className="space-y-6">
              <Skeleton className="h-64 w-full rounded-2xl" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                  <Skeleton className="h-10 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
                <div className="space-y-4">
                  <Skeleton className="h-48 w-full rounded-2xl" />
                </div>
              </div>
            </div>
          }
        >
          <DiagnosisDetails params={params} searchParams={searchParams} />
        </Suspense>
      </div>
    </section>
  );
}
