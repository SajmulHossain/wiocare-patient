import type { IDoctor } from "./doctor.type";
import type { ISpecialty } from "./specialty.type";

export interface IDoctorSpecialty {
  id: string;
  doctorId: string;
  specialtyId: string;
  doctor: IDoctor;
  specialty: ISpecialty;
  createdAt: string;
  updatedAt: string;
}
