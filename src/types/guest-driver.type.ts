import type { IAmbulanceBid } from "./ambulance-bid.type";
import type { IAmbulanceRequest } from "./ambulance-request.type";
import type { IOrganization } from "./organization.type";

export interface IGuestDriver {
  id: string;
  organizationId: string;
  name: string;
  contactNumber: string;
  organization: IOrganization;
  bids: IAmbulanceBid[];
  trips: IAmbulanceRequest[];
  convertedToDriverId: string | null;
  createdAt: string;
  updatedAt: string;
}
