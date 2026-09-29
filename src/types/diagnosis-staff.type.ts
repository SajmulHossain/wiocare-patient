import type { DiagnosisStaffRole } from "./enum";
import type { IDiagnosis } from "./diagnosis.type";
import type { IUser } from "./user.type";

export interface IDiagnosisStaff {
  id: string;
  diagnosisId: string;
  userId: string;
  role: DiagnosisStaffRole;
  isActive: boolean;
  diagnosis: IDiagnosis;
  user: IUser;
  createdAt: string;
  updatedAt: string;
}
