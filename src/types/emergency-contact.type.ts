import type { IPatient } from "./patient.type";

export interface IEmergencyContact {
  id: string;
  patientId: string;
  name: string;
  relation: string | null;
  mobile: string;
  patient: IPatient;
  createdAt: string;
  updatedAt: string;
}
