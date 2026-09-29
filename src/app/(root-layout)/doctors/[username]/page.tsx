import { Suspense } from "react";
import DoctorDetails from "./_section/doctor-details";
import DoctorDetailsSkeleton from "./_suspense/doctor-details-skeleton";
import type { IPageProps } from "@/types";

export default function DoctorPage({
  params,
  searchParams,
}: IPageProps<{ username: string }>) {
  return (
    <Suspense fallback={<DoctorDetailsSkeleton />}>
      <DoctorDetails params={params} searchParams={searchParams} />
    </Suspense>
  );
}
