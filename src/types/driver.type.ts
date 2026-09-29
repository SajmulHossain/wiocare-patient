import type { IAmbulanceBid } from "./ambulance-bid.type";
import type { IAmbulanceRequest } from "./ambulance-request.type";
import type { IDriverDocument } from "./driver-document.type";
import type { IUser } from "./user.type";
import type { IVehicle } from "./vehicle.type";
import type { VerificationStatus } from "./enum";

export interface IDriver {
  id: string;
  userId: string;
  organizationId: string | null;
  licenseNumber: string;
  licenseFirstIssueDate: string;
  licenseExpiryDate: string;
  licenseImageUrl: string;
  verificationStatus: VerificationStatus;
  verificationNotes: string | null;
  statusUpdatedAt: string | null;
  verifiedByUserId: string | null;
  contactNumber: string;
  address: string | null;
  nidNumber: string;
  user: IUser;
  vehicles: IVehicle[];
  acceptedTrips: IAmbulanceRequest[];
  bids: IAmbulanceBid[];
  documents: IDriverDocument[];
  createdAt: string;
  updatedAt: string;
}
