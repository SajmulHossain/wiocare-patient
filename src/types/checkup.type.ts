import type { CheckupSession } from "./enum";
import type { IPatient } from "./patient.type";
import type { IVital } from "./vital.type";

export interface ICheckup {
  id: string;
  patientId: string;
  session: CheckupSession;
  patient: IPatient;
  vitals: IVital[];
  createdAt: string;
  updatedAt: string;
}
