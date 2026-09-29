import type { IDiagnosisBid } from "./diagnosis-bid.type";
import type { IDiagnosisStaff } from "./diagnosis-staff.type";
import type { IOrganization } from "./organization.type";
import type { VerificationStatus } from "./enum";

export interface IDiagnosis {
  id: string;
  organizationId: string;
  businessEmail: string | null;
  phoneNumber: string | null;
  website: string | null;
  about: string | null;
  address: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
  postalCode: string | null;
  reportFooter: string | null;
  reportHeaderLogo: string | null;
  licenseNumber: string | null;
  verificationStatus: VerificationStatus;
  verificationNotes: string | null;
  statusUpdatedAt: string | null;
  verifiedByUserId: string | null;
  organization: IOrganization;
  staff: IDiagnosisStaff[];
  diagnosisBids: IDiagnosisBid[];
  createdAt: string;
  updatedAt: string;
}
