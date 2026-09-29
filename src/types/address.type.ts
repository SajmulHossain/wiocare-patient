import type { AddressType } from "./enum";
import type { IDelivery } from "./delivery.type";
import type { IOrder } from "./order.type";
import type { IPatient } from "./patient.type";

export interface IAddress {
  id: string;
  patientId: string | null;
  patient: IPatient | null;
  contactName: string | null;
  contactNumber: string | null;
  street: string;
  area: string;
  landmark: string | null;
  city: string;
  state: string;
  postalCode: string | null;
  country: string;
  latitude: number | null;
  longitude: number | null;
  pickupDeliveries: IDelivery[];
  dropOffDeliveries: IDelivery[];
  orderDeliveries: IOrder[];
  type: AddressType;
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
}
