import type { ClinicalReviewStatus } from "./enum";
import type { IDoctor } from "./doctor.type";
import type { IPatient } from "./patient.type";

export interface IClinicalReview {
  id: string;
  patientId: string;
  doctorId: string;
  status: ClinicalReviewStatus;
  clinicalSummary: unknown | null;
  keyFindings: unknown | null;
  conditionTimeline: unknown | null;
  medicationOverview: unknown | null;
  riskAssessment: unknown | null;
  recommendations: unknown | null;
  failureReason: string | null;
  patient: IPatient;
  doctor: IDoctor;
  createdAt: string;
  updatedAt: string;
}
