import type { IDoctorSpecialty } from "./doctor-specialty.type";

export interface ISpecialty {
  id: string;
  name: string;
  description: string | null;
  icon: string | null;
  isDeleted: boolean;
  deletedAt: string | null;
  deletedBy: string | null;
  createdAt: string;
  updatedAt: string;
  doctorSpecialties: IDoctorSpecialty[];
}
