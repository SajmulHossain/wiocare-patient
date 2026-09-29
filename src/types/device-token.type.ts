import type { DevicePlatform } from "./enum";
import type { IUser } from "./user.type";

export interface IDeviceToken {
  id: string;
  token: string;
  platform: DevicePlatform;
  deviceId: string | null;
  userId: string;
  user: IUser;
  lastUsedAt: string;
  createdAt: string;
  updatedAt: string;
}
