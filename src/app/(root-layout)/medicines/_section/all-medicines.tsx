import { fetchMedicines } from "@/app/(root-layout)/_action/medicine.action";
import ErrorState from "@/components/common/error-state";
import EmptyState from "@/components/common/empty-state";
import { MedicineCard } from "@/components/common/medicine-card";
import { RiFirstAidKitLine } from "@remixicon/react";
import type { IPageProps } from "@/types";
import CustomPagination from "@/components/common/custom-pagination";

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
    <>
      {!medicinesData?.success ? (
        <ErrorState message={medicinesData?.message} />
      ) : medicines.length === 0 ? (
        <EmptyState
          title="No Medicines Found"
          message="We couldn't find any medicines matching your search criteria. Please try adjusting your filters."
          icon={RiFirstAidKitLine}
        />
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
            {medicines.map((medicine) => (
              <MedicineCard key={medicine.id} medicine={medicine} />
            ))}
          </div>

          <CustomPagination meta={medicinesData?.meta || null} />
        </>
      )}
    </>
  );
}
