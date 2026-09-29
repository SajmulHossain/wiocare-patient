import type { IAppointment } from "./appointment.type";
import type { IDoctor } from "./doctor.type";
import type { IDoctorDailyRoster } from "./doctor-daily-roster.type";
import type { ISlot } from "./slot.type";
import type { SlotStatus } from "./enum";

export interface IDoctorSlot {
  id: string;
  status: SlotStatus;
  rosterId: string;
  slotId: string;
  doctorId: string;
  roster: IDoctorDailyRoster;
  slot: ISlot;
  doctor: IDoctor;
  appointments: IAppointment[];
  lockedAt: string | null;
  createdAt: string;
  updatedAt: string;
}
