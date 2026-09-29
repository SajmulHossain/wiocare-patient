import type { IPatient } from "./patient.type";
import type { SnapshotStatus } from "./enum";

export interface IDashboardSnapshot {
  id: string;
  patientId: string;
  status: SnapshotStatus;
  healthSummary: unknown | null;
  healthProjection: unknown | null;
  healthRecommendation: unknown | null;
  patient: IPatient;
  createdAt: string;
  updatedAt: string;
}
