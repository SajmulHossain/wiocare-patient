import type { IAmbulanceBid } from "./ambulance-bid.type";
import type { IAmbulanceRequest } from "./ambulance-request.type";
import type { IDriver } from "./driver.type";
import type { IVehicleDocument } from "./vehicle-document.type";
import type { RegistrationZone } from "./enum";
import type { VehicleClass } from "./enum";
import type { VehicleType } from "./enum";

export interface IVehicle {
  id: string;
  driverId: string;
  vehicleType: VehicleType;
  model: string | null;
  registrationZone: RegistrationZone;
  vehicleClass: VehicleClass;
  serialNumber: string;
  vehicleNumber: string;
  hasOxygenCylinder: boolean;
  hasFirstAidKit: boolean;
  hasFireExtinguisher: boolean;
  hasStretcher: boolean;
  hasGpsTracker: boolean;
  isActive: boolean;
  driver: IDriver;
  trips: IAmbulanceRequest[];
  bids: IAmbulanceBid[];
  documents: IVehicleDocument[];
  createdAt: string;
  updatedAt: string;
}
