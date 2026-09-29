import type { IDoctor } from "./doctor.type";

export interface IDoctorPrefix {
  id: string;
  title: string;
  isActive: boolean;
  code: string;
  doctors: IDoctor[];
  createdAt: string;
  updatedAt: string;
}
