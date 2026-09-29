import type { IPrescription } from "./prescription.type";
import type { IPrescriptionMedicine } from "./prescription-medicine.type";

export interface IPrescriptionAnalysis {
  id: string;
  patientName: string | null;
  doctorName: string | null;
  prescriptionDate: string;
  medicines: IPrescriptionMedicine[];
  tests: string[];
  potentialInteractions: unknown;
  suggestions: unknown | null;
  doctorNotes: string | null;
  createdAt: string;
  updatedAt: string;
  prescription: IPrescription | null;
  prescriptionId: string | null;
}
