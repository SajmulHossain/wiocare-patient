import type { IOrder } from "./order.type";
import type { IRider } from "./rider.type";
import type { RiderBatch } from "./enum";
import type { RiderOfferStatus } from "./enum";

export interface IRiderOrderOffer {
  id: string;
  orderId: string;
  riderId: string;
  status: RiderOfferStatus;
  riderBatch: RiderBatch;
  riderBatchScore: number;
  distanceToPickup: number | null;
  estimatedCost: number | null;
  isOnSameRoute: boolean;
  offeredAt: string;
  respondedAt: string | null;
  expiresAt: string;
  order: IOrder;
  rider: IRider;
  createdAt: string;
  updatedAt: string;
}
