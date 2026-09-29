import type { DiagnosisPaymentMethod } from "./enum";
import type { DiagnosisRequestStatus } from "./enum";
import type { DiagnosisRequestType } from "./enum";
import type { IDiagnosisBid } from "./diagnosis-bid.type";
import type { IDiagnosisRequestTest } from "./diagnosis-request-test.type";
import type { IPatient } from "./patient.type";

export interface IDiagnosisRequest {
  id: string;
  patientId: string;
  type: DiagnosisRequestType;
  status: DiagnosisRequestStatus;
  requestedTests: IDiagnosisRequestTest[];
  prescriptionUrl: string | null;
  notes: string | null;
  acceptedBidId: string | null;
  acceptedBid: IDiagnosisBid | null;
  paymentMethod: DiagnosisPaymentMethod | null;
  patient: IPatient;
  bids: IDiagnosisBid[];
  createdAt: string;
  updatedAt: string;
}
