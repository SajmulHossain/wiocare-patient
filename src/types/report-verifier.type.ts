import type { IDoctor } from "./doctor.type";
import type { IReportVerificationRequest } from "./report-verification-request.type";
import type { IUser } from "./user.type";
import type { ReportVerifierStatus } from "./enum";

export interface IReportVerifier {
  id: string;
  doctorId: string;
  status: ReportVerifierStatus;
  appliedAt: string;
  reviewedAt: string | null;
  reviewedBy: string | null;
  reviewNotes: string | null;
  doctor: IDoctor;
  reviewedByUser: IUser | null;
  verificationRequests: IReportVerificationRequest[];
  createdAt: string;
  updatedAt: string;
}
