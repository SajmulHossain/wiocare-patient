import type { IAmbulanceBid } from "./ambulance-bid.type";
import type { IAmbulanceRequest } from "./ambulance-request.type";
import type { IDiagnosis } from "./diagnosis.type";
import type { IGuestDriver } from "./guest-driver.type";
import type { IInvitation } from "./invitation.type";
import type { IMember } from "./member.type";
import type { IUser } from "./user.type";

export interface IOrganization {
  id: string;
  name: string;
  slug: string | null;
  logo: string | null;
  metadata: string | null;
  createdAt: string;
  updatedAt: string;
  members: IMember[];
  invitations: IInvitation[];
  diagnosis: IDiagnosis | null;
  ambulanceBids: IAmbulanceBid[];
  ambulanceRequests: IAmbulanceRequest[];
  guestDrivers: IGuestDriver[];
  userId: string | null;
  user: IUser | null;
}
