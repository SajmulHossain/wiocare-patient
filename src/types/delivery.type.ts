import type { DeliveryStatus } from "./enum";
import type { IAddress } from "./address.type";
import type { IOrder } from "./order.type";
import type { IRider } from "./rider.type";
import type { IRiderReview } from "./rider-review.type";
import type { IRiderVehicle } from "./rider-vehicle.type";

export interface IDelivery {
  id: string;
  orderId: string;
  riderId: string | null;
  vehicleId: string | null;
  status: DeliveryStatus;
  deliveryFee: number;
  estimatedDistance: number | null;
  estimatedTime: number | null;
  pickupAddressId: string | null;
  dropoffAddressId: string | null;
  assignedAt: string | null;
  pickedUpAt: string | null;
  deliveredAt: string | null;
  cancellationReason: string | null;
  order: IOrder;
  rider: IRider | null;
  vehicle: IRiderVehicle | null;
  pickUpAddress: IAddress | null;
  dropOffAddress: IAddress | null;
  review: IRiderReview | null;
  createdAt: string;
  updatedAt: string;
}
