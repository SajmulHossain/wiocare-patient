import { fetchMedicines } from "@/app/(root-layout)/_action/medicine.action";
import ErrorState from "@/components/shared/error-state";
import EmptyState from "@/components/shared/empty-state";
import { MedicineCard } from "@/components/shared/medicine-card";
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
    <div className="pt-10 pb-16">
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
  );
}
