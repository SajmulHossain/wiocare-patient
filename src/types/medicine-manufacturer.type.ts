import type { IMedicine } from "./medicine.type";

export interface IMedicineManufacturer {
  id: string;
  name: string;
  slug: string;
  medicines: IMedicine[];
  createdAt: string;
  updatedAt: string;
}
