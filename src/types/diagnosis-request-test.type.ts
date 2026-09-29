import type { IDiagnosisRequest } from "./diagnosis-request.type";
import type { IGlobalMedicalTest } from "./global-medical-test.type";

export interface IDiagnosisRequestTest {
  id: string;
  diagnosisRequestId: string;
  globalTestId: string;
  diagnosisRequest: IDiagnosisRequest;
  globalTest: IGlobalMedicalTest;
}
