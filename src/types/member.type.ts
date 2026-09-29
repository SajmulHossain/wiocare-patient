import type { IOrganization } from "./organization.type";
import type { IUser } from "./user.type";

export interface IMember {
  id: string;
  organizationId: string;
  organization: IOrganization;
  userId: string;
  user: IUser;
  role: string;
  createdAt: string;
  updatedAt: string;
}
