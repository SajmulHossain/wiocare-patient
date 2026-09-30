import { Suspense } from "react";
import AllMedicines from "./_section/all-medicines";
import MedicinesSkeleton from "./_suspense/medicines-skeleton";
import type { IPageProps } from "@/types";
import MedicineFilters from "./_components/medicine-filters";

export default function MedicinesPage({
  params,
  searchParams,
}: IPageProps<null>) {
  return (
    <section className="bg-linear-to-b from-muted/30 to-background min-h-screen">
      <div className="section pt-10 pb-16">
        <div className="mb-8 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/70">
            Pharmacy & Medicines
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Browse our wide range of authentic medicines, healthcare products,
            and wellness essentials delivered directly to your door with utmost
            care.
          </p>
        </div>

        <MedicineFilters />

        <Suspense fallback={<MedicinesSkeleton />}>
          <AllMedicines params={params} searchParams={searchParams} />
        </Suspense>
      </div>
    </section>
  );
}
