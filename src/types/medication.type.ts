import type { IMedicationLog } from "./medication-log.type";
import type { IPatient } from "./patient.type";
import type { IPrescriptionMedicine } from "./prescription-medicine.type";
import type { MedicationStatus } from "./enum";

export interface IMedication {
  id: string;
  patientId: string;
  patient: IPatient;
  prescriptionId: string | null;
  prescriptionMedicineId: string | null;
  prescriptionMedicine: IPrescriptionMedicine | null;
  name: string;
  genericName: string | null;
  strength: string | null;
  instructions: string | null;
  morning: number;
  noon: number;
  night: number;
  morningTime: string | null;
  noonTime: string | null;
  nightTime: string | null;
  startDate: string;
  endDate: string | null;
  status: MedicationStatus;
  logs: IMedicationLog[];
  createdAt: string;
  updatedAt: string;
}
