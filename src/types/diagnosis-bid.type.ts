import type { DiagnosisBidStatus } from "./enum";
import type { IDiagnosis } from "./diagnosis.type";
import type { IDiagnosisRequest } from "./diagnosis-request.type";

export interface IDiagnosisBid {
  id: string;
  diagnosisRequestId: string;
  diagnosisId: string;
  proposedPrice: number;
  estimatedCompletionHours: number | null;
  note: string | null;
  status: DiagnosisBidStatus;
  diagnosisRequest: IDiagnosisRequest;
  diagnosis: IDiagnosis;
  acceptedForRequest: IDiagnosisRequest | null;
  createdAt: string;
  updatedAt: string;
}
