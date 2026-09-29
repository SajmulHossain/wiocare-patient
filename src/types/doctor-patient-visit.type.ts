import type { IDoctor } from "./doctor.type";
import type { IDoctorPatientChart } from "./doctor-patient-chart.type";
import type { IVital } from "./vital.type";

export interface IDoctorPatientVisit {
  id: string;
  chartId: string;
  doctorId: string;
  date: string;
  chiefComplaints: string[];
  diagnoses: string[];
  notes: string | null;
  chart: IDoctorPatientChart;
  doctor: IDoctor;
  vitals: IVital[];
  createdAt: string;
  updatedAt: string;
}
