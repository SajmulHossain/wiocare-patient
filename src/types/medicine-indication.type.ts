import type { IMedicine } from "./medicine.type";

export interface IMedicineIndication {
  id: string;
  name: string;
  slug: string;
  medicines: IMedicine[];
  createdAt: string;
  updatedAt: string;
}
