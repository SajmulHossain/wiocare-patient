import type { IOrder } from "./order.type";
import type { IPatient } from "./patient.type";
import type { IPrescriptionAnalysis } from "./prescription-analysis.type";
import type { IPrescriptionMedicine } from "./prescription-medicine.type";
import type { IUser } from "./user.type";
import type { PrescriptionStatus } from "./enum";
import type { Wio_Status } from "./enum";

export interface IPrescription {
  id: string;
  patientId: string;
  patient: IPatient;
  addedById: string | null;
  addedBy: IUser | null;
  fileUrl: string | null;
  fileHash: string | null;
  status: PrescriptionStatus;
  wio_status: Wio_Status;
  flagReason: string | null;
  isDeleted: boolean;
  deletedAt: string | null;
  deletedBy: string | null;
  analysis: IPrescriptionAnalysis[];
  prescriptionMedicines: IPrescriptionMedicine[];
  orders: IOrder[];
  createdAt: string;
  updatedAt: string;
}
