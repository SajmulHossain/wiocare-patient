import type { IUser } from "./user.type";
import type { NotificationType } from "./enum";

export interface INotification {
  id: string;
  title: string | null;
  message: string | null;
  type: NotificationType;
  actionUrl: string | null;
  imageUrl: string | null;
  isRead: boolean;
  userId: string;
  user: IUser;
  createdAt: string;
  updatedAt: string;
}
