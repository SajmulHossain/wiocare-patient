import { Suspense } from "react";
import AllMedicines from "./_section/all-medicines";
import MedicinesSkeleton from "./_suspense/medicines-skeleton";
import type { IPageProps } from "@/types";

export default function MedicinesPage({
  params,
  searchParams,
}: IPageProps<null>) {
  return (
    <Suspense fallback={<MedicinesSkeleton />}>
      <AllMedicines params={params} searchParams={searchParams} />
    </Suspense>
  );
}
