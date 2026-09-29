import type { DoctorAvailabilityStatus } from "./enum";
import type { DoctorService } from "./enum";
import type { IDoctor } from "./doctor.type";

export interface IDoctorAvailability {
  id: string;
  doctorId: string;
  availabilityStatus: DoctorAvailabilityStatus;
  offeredServices: DoctorService[];
  weeklySchedule: unknown | null;
  nextAvailableDate: string | null;
  createdAt: string;
  updatedAt: string;
  doctor: IDoctor;
}
