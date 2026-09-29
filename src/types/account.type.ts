import type { IUser } from "./user.type";

export interface IAccount {
  id: string;
  userId: string;
  accountId: string;
  providerId: string;
  accessToken: string | null;
  refreshToken: string | null;
  idToken: string | null;
  expiresAt: string | null;
  password: string | null;
  createdAt: string;
  updatedAt: string;
  user: IUser;
}
