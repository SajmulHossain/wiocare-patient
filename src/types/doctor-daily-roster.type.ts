import type { IDoctor } from "./doctor.type";
import type { IDoctorSlot } from "./doctor-slot.type";

export interface IDoctorDailyRoster {
  id: string;
  date: string;
  doctorId: string;
  isModified: boolean;
  doctor: IDoctor;
  doctorSlots: IDoctorSlot[];
  createdAt: string;
  updatedAt: string;
}
