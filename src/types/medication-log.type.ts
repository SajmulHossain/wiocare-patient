import type { IMedication } from "./medication.type";
import type { MedicationDoseStatus } from "./enum";
import type { MedicationSlot } from "./enum";

export interface IMedicationLog {
  id: string;
  medicationId: string;
  medication: IMedication;
  patientId: string;
  date: string;
  slot: MedicationSlot;
  status: MedicationDoseStatus;
  scheduledTime: string | null;
  takenAt: string | null;
  createdAt: string;
  updatedAt: string;
}
