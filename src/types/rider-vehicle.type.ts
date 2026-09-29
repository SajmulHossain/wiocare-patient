import type { DeliveryVehicleType } from "./enum";
import type { IDelivery } from "./delivery.type";
import type { IRider } from "./rider.type";

export interface IRiderVehicle {
  id: string;
  riderId: string;
  type: DeliveryVehicleType;
  model: string | null;
  color: string | null;
  licensePlate: string | null;
  isActive: boolean;
  rider: IRider;
  deliveries: IDelivery[];
  createdAt: string;
  updatedAt: string;
}
