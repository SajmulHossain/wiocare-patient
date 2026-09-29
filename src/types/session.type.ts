import type { IUser } from "./user.type";

export interface ISession {
  id: string;
  userId: string;
  token: string;
  expiresAt: string;
  ipAddress: string | null;
  userAgent: string | null;
  createdAt: string;
  updatedAt: string;
  activeOrganizationId: string | null;
  user: IUser;
}
