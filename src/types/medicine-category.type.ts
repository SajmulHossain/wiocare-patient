import type { IMedicine } from "./medicine.type";

export interface IMedicineCategory {
  id: string;
  name: string;
  slug: string;
  medicines: IMedicine[];
  createdAt: string;
  updatedAt: string;
}
