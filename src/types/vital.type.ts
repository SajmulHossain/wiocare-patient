import type { ICheckup } from "./checkup.type";
import type { IDoctor } from "./doctor.type";
import type { IDoctorPatientVisit } from "./doctor-patient-visit.type";
import type { IPatient } from "./patient.type";
import type { VitalType } from "./enum";

export interface IVital {
  id: string;
  patientId: string;
  type: VitalType;
  checkupId: string | null;
  visitId: string | null;
  measuredAt: string;
  value: number | null;
  unit: string | null;
  components: unknown | null;
  context: string | null;
  checkup: ICheckup | null;
  visit: IDoctorPatientVisit | null;
  patient: IPatient;
  addedByDoctorId: string | null;
  addedByDoctor: IDoctor | null;
  createdAt: string;
  updatedAt: string;
}
