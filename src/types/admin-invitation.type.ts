import type { AdminInvitationStatus } from "./enum";

export interface IAdminInvitation {
  id: string;
  email: string;
  name: string;
  token: string;
  status: AdminInvitationStatus;
  roleIds: string[];
  expiresAt: string;
  invitedBy: string;
  createdAt: string;
  updatedAt: string;
}
