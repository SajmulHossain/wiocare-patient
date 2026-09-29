import type { InvitationStatus } from "./enum";
import type { IOrganization } from "./organization.type";
import type { IUser } from "./user.type";

export interface IInvitation {
  id: string;
  organizationId: string;
  organization: IOrganization;
  email: string;
  role: string | null;
  status: InvitationStatus;
  expiresAt: string;
  inviterId: string;
  inviter: IUser;
  createdAt: string;
  updatedAt: string;
}
