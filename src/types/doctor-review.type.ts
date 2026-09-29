import type { IDoctor } from "./doctor.type";
import type { IPatient } from "./patient.type";
import type { IUser } from "./user.type";

export interface IDoctorReview {
  id: string;
  patientId: string | null;
  doctorId: string;
  rating: number;
  review: string;
  userName: string;
  photoUrl: string | null;
  createdAt: string;
  updatedAt: string;
  patient: IPatient | null;
  doctor: IDoctor;
  user: IUser | null;
  userId: string | null;
}
