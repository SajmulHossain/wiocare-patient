import type { IDoctorSlot } from "./doctor-slot.type";
import type { IDoctorWeeklySlot } from "./doctor-weekly-slot.type";

export interface ISlot {
  id: string;
  startTime: string;
  endTime: string;
  doctorSlots: IDoctorSlot[];
  weeklySlots: IDoctorWeeklySlot[];
  createdAt: string;
  updatedAt: string;
}
