import { fetchMedicines } from "@/app/(root-layout)/_action/medicine.action";
import EmptyState from "@/components/common/empty-state";
import { MedicineCard } from "@/components/common/medicine-card";
import { RiFirstAidKitLine } from "@remixicon/react";

export default async function FeaturedMedicinesList() {
  const medicinesData = await fetchMedicines({ limit: 4 });
  const medicines = medicinesData?.data || [];

  if (medicines.length === 0) {
    return (
      <EmptyState
        title="No Medicines Found"
        message="We couldn't find any medicines matching your search criteria. Please try adjusting your filters."
        icon={RiFirstAidKitLine}
      />
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
      {medicines.map((medicine) => (
        <MedicineCard key={medicine.id} medicine={medicine} />
      ))}
    </div>
  );
}
