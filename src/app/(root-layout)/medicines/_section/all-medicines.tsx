import { fetchMedicines } from "@/app/(root-layout)/_action/medicine.action";
import ErrorState from "@/components/shared/error-state";
import EmptyState from "@/components/shared/empty-state";
import { MedicineCard } from "@/components/shared/medicine-card";
import MedicineFilters from "../_components/medicine-filters";
import { RiFirstAidKitLine } from "@remixicon/react";
import type { IPageProps } from "@/types";

export default async function AllMedicines({
  searchParams,
}: IPageProps<unknown>) {
  const resolvedSearchParams = await searchParams;

  const medicinesData = await fetchMedicines({
    ...resolvedSearchParams,
    limit: 24, // Fetch 24 for proper grid filling
  });
  const medicines = medicinesData?.data || [];

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

        {!medicinesData?.success ? (
          <ErrorState message={medicinesData?.message} />
        ) : medicines.length === 0 ? (
          <EmptyState
            title="No Medicines Found"
            message="We couldn't find any medicines matching your search criteria. Please try adjusting your filters."
            icon={RiFirstAidKitLine}
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
            {medicines.map((medicine) => (
              <MedicineCard key={medicine.id} medicine={medicine} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
