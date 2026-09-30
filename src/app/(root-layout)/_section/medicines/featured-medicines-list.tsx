import { fetchMedicines } from "@/app/(root-layout)/_action/medicine.action";
import { MedicineCard } from "@/components/shared/medicine-card";

export default async function FeaturedMedicinesList() {
  const medicinesData = await fetchMedicines({ limit: 4 });
  const medicines = medicinesData?.data || [];

  if (medicines.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-10">
        No medicines found.
      </div>
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
