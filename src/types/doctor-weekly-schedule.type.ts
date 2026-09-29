import type { DayOfWeek } from "./enum";
import type { IDoctor } from "./doctor.type";
import type { IDoctorWeeklySlot } from "./doctor-weekly-slot.type";

export interface IDoctorWeeklySchedule {
  id: string;
  doctorId: string;
  dayOfWeek: DayOfWeek;
  doctor: IDoctor;
  slots: IDoctorWeeklySlot[];
  createdAt: string;
  updatedAt: string;
}
