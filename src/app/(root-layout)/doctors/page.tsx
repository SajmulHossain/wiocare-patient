import { Suspense } from "react";
import AllDoctors from "./_section/all-doctors";
import DoctorsSkeleton from "./_suspense/doctors-skeleton";
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

        <Suspense fallback={<DoctorsSkeleton />}>
          <AllDoctors params={params} searchParams={searchParams} />
        </Suspense>
      </div>
    </section>
  );
}
