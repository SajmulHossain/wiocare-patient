import type { IOrder } from "./order.type";
import type { OrderStatus } from "./enum";

export interface IOrderStatusHistory {
  id: string;
  orderId: string;
  status: OrderStatus;
  note: string | null;
  actorType: string;
  actorId: string | null;
  order: IOrder;
  createdAt: string;
}
