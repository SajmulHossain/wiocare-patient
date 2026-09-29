import type { IDoctorWeeklySchedule } from "./doctor-weekly-schedule.type";
import type { ISlot } from "./slot.type";

export interface IDoctorWeeklySlot {
  id: string;
  weeklyScheduleId: string;
  slotId: string;
  weeklySchedule: IDoctorWeeklySchedule;
  slot: ISlot;
  createdAt: string;
  updatedAt: string;
}
