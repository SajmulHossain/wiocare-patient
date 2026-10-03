import { Suspense } from "react";
import AllDoctors from "./_section/all-doctors";
import DoctorsSkeleton from "./_suspense/doctors-skeleton";
import DoctorFilter from "@/components/common/doctor-filter";
import type { IPageProps } from "@/types";

export default function DoctorsPage({
  params,
  searchParams,
}: IPageProps<null>) {
  return (
    <section className="bg-muted/30 min-h-screen">
      <div className="section pt-10 pb-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-3">
            Our Doctors
          </h1>
          <p className="text-muted-foreground text-lg">
            Browse our comprehensive list of top-rated specialists for
            personalized care.
          </p>
        </div>

        <Suspense
          fallback={
            <div className="mx-auto mb-10 h-16 w-full max-w-4xl animate-pulse rounded-full bg-background border border-border shadow-sm"></div>
          }
        >
          <DoctorFilter />
        </Suspense>

        <Suspense fallback={<DoctorsSkeleton />}>
          <AllDoctors params={params} searchParams={searchParams} />
        </Suspense>
      </div>
    </section>
  );
}
