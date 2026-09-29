import type { IPatient } from "./patient.type";
import type { IReportAnalysis } from "./report-analysis.type";
import type { IReportVerificationRequest } from "./report-verification-request.type";
import type { ITest } from "./test.type";
import type { IUser } from "./user.type";
import type { Wio_Status } from "./enum";

export interface IReport {
  id: string;
  patientId: string;
  patient: IPatient;
  addedById: string | null;
  addedBy: IUser | null;
  fileUrl: string | null;
  fileHash: string | null;
  wio_status: Wio_Status;
  flagReason: string | null;
  isDeleted: boolean;
  deletedAt: string | null;
  deletedBy: string | null;
  analysis: IReportAnalysis[];
  tests: ITest[];
  verificationRequests: IReportVerificationRequest[];
  createdAt: string;
  updatedAt: string;
}
