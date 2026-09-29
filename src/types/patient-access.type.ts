import type { IDoctor } from "./doctor.type";
import type { IPatient } from "./patient.type";
import type { PatientAccessStatus } from "./enum";
import type { PatientAccessVia } from "./enum";

export interface IPatientAccess {
  id: string;
  patientId: string;
  doctorId: string;
  status: PatientAccessStatus;
  requestedBy: string;
  grantedBy: string | null;
  grantedAt: string | null;
  deniedAt: string | null;
  revokedAt: string | null;
  lastVisitAt: string | null;
  expiresAt: string | null;
  grantedVia: PatientAccessVia | null;
  createdAt: string;
  updatedAt: string;
  patient: IPatient;
  doctor: IDoctor;
}
