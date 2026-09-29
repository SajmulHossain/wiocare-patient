import type { IDoctor } from "./doctor.type";
import type { IDoctorPatientVisit } from "./doctor-patient-visit.type";
import type { IPatient } from "./patient.type";

export interface IDoctorPatientChart {
  id: string;
  doctorId: string;
  patientId: string | null;
  name: string;
  phone: string | null;
  serial: string;
  doctor: IDoctor;
  patient: IPatient | null;
  visits: IDoctorPatientVisit[];
  createdAt: string;
  updatedAt: string;
}
