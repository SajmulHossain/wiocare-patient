import type { IDoctor } from "./doctor.type";

export interface IExperience {
  id: string;
  doctorId: string;
  organization: string;
  designation: string;
  startDate: string;
  endDate: string | null;
  doctor: IDoctor;
  createdAt: string;
  updatedAt: string;
}
