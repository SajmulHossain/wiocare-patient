import type { IPatient } from "./patient.type";

export interface IMedicationReminderSetting {
  id: string;
  patientId: string;
  patient: IPatient;
  timezone: string;
  morningTime: string;
  noonTime: string;
  nightTime: string;
  createdAt: string;
  updatedAt: string;
}
