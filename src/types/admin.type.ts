import type { IAdminRoleAssignment } from "./admin-role-assignment.type";
import type { IUser } from "./user.type";

export interface IAdmin {
  id: string;
  userId: string;
  user: IUser;
  isActive: boolean;
  roleAssignments: IAdminRoleAssignment[];
  createdAt: string;
  updatedAt: string;
}
