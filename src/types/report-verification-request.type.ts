import type { IPatient } from "./patient.type";
import type { IReport } from "./report.type";
import type { IReportVerifier } from "./report-verifier.type";
import type { ReportVerificationStatus } from "./enum";
import type { VerificationDecision } from "./enum";
import type { VerificationPriority } from "./enum";

export interface IReportVerificationRequest {
  id: string;
  reportId: string;
  patientId: string;
  verifierId: string | null;
  status: ReportVerificationStatus;
  priority: VerificationPriority;
  patientNote: string | null;
  decision: VerificationDecision | null;
  verifierSummary: string | null;
  corrections: string | null;
  recommendations: string | null;
  acceptedAt: string | null;
  completedAt: string | null;
  report: IReport;
  patient: IPatient;
  verifier: IReportVerifier | null;
  createdAt: string;
  updatedAt: string;
}
