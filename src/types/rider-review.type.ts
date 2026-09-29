import type { IDelivery } from "./delivery.type";
import type { IPatient } from "./patient.type";
import type { IRider } from "./rider.type";

export interface IRiderReview {
  id: string;
  riderId: string;
  patientId: string;
  deliveryId: string | null;
  rating: number;
  comment: string | null;
  rider: IRider;
  patient: IPatient;
  delivery: IDelivery | null;
  createdAt: string;
  updatedAt: string;
}
