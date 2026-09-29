import type { IAddress } from "./address.type";
import type { IDelivery } from "./delivery.type";
import type { IOrderItem } from "./order-item.type";
import type { IOrderStatusHistory } from "./order-status-history.type";
import type { IPatient } from "./patient.type";
import type { IPrescription } from "./prescription.type";
import type { IRiderOrderOffer } from "./rider-order-offer.type";
import type { OrderPaymentMethod } from "./enum";
import type { OrderStatus } from "./enum";
import type { OrderType } from "./enum";

export interface IOrder {
  id: string;
  patientName: string;
  orderNumber: string;
  status: OrderStatus;
  type: OrderType;
  paymentMethod: OrderPaymentMethod;
  notes: string | null;
  cancellationReason: string | null;
  subTotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
  patientId: string | null;
  patient: IPatient | null;
  prescriptionId: string | null;
  prescription: IPrescription | null;
  deliveryAddressId: string | null;
  deliveryAddress: IAddress | null;
  items: IOrderItem[];
  delivery: IDelivery | null;
  riderOffers: IRiderOrderOffer[];
  statusHistory: IOrderStatusHistory[];
  createdAt: string;
  updatedAt: string;
}
