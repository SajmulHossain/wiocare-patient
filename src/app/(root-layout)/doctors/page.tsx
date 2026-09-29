import { Suspense } from "react";
import AllDoctors from "./_section/all-doctors";
import DoctorsSkeleton from "./_suspense/doctors-skeleton";
import type { IPageProps } from "@/types";

export default function DoctorsPage({ params, searchParams }: IPageProps) {
  return (
    <Suspense fallback={<DoctorsSkeleton />}>
      <AllDoctors params={params} searchParams={searchParams} />
    </Suspense>
  );
}
