import type { IMedicine } from "./medicine.type";
import type { PregnancyCategory } from "./enum";

export interface IMedicineGeneric {
  id: string;
  name: string;
  pregnancyCategory: PregnancyCategory;
  contraindications: string | null;
  sideEffects: string | null;
  medicines: IMedicine[];
  createdAt: string;
  updatedAt: string;
}
