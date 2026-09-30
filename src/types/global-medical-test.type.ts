import type { IDiagnosisRequestTest } from "./diagnosis-request-test.type";

export interface IGlobalMedicalTest {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  sampleType: string | null;
  diagnosisRequestTests: IDiagnosisRequestTest[];
  createdAt: string;
  updatedAt: string;
}
