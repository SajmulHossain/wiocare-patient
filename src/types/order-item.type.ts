import type { IMedicine } from "./medicine.type";
import type { IOrder } from "./order.type";

export interface IOrderItem {
  id: string;
  orderId: string;
  medicineId: string;
  quantity: number;
  unitPrice: number;
  subTotal: number;
  order: IOrder;
  medicine: IMedicine;
  createdAt: string;
  updatedAt: string;
}
