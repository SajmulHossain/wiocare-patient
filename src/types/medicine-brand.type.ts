import type { IMedicine } from "./medicine.type";

export interface IMedicineBrand {
  id: string;
  name: string;
  slug: string;
  medicines: IMedicine[];
  createdAt: string;
  updatedAt: string;
}
