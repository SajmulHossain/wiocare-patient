import type { BidStatus } from "./enum";
import type { IAmbulanceRequest } from "./ambulance-request.type";
import type { IDriver } from "./driver.type";
import type { IGuestDriver } from "./guest-driver.type";
import type { IOrganization } from "./organization.type";
import type { IVehicle } from "./vehicle.type";

export interface IAmbulanceBid {
  id: string;
  requestId: string;
  driverId: string | null;
  vehicleId: string | null;
  organizationId: string | null;
  guestDriverId: string | null;
  proposedFare: number;
  estimatedArrivalMinutes: number;
  note: string | null;
  status: BidStatus;
  request: IAmbulanceRequest;
  driver: IDriver | null;
  vehicle: IVehicle | null;
  organization: IOrganization | null;
  guestDriver: IGuestDriver | null;
  acceptedForRequest: IAmbulanceRequest | null;
  createdAt: string;
  updatedAt: string;
}
