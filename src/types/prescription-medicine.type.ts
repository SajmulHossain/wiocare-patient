import type { IMedication } from "./medication.type";
import type { IPrescription } from "./prescription.type";
import type { IPrescriptionAnalysis } from "./prescription-analysis.type";

export interface IPrescriptionMedicine {
  id: string;
  prescriptionId: string;
  name: string;
  genericName: string | null;
  isVerified: boolean;
  strength: string;
  duration: string;
  instructions: string | null;
  durationDate: string | null;
  morning: number;
  noon: number;
  night: number;
  prescription: IPrescription;
  prescriptionAnalysis: IPrescriptionAnalysis | null;
  prescriptionAnalysisId: string | null;
  medication: IMedication | null;
}
