import type { IAdminRoleAssignment } from "./admin-role-assignment.type";
import type { IAdminRolePermission } from "./admin-role-permission.type";

export interface IAdminRole {
  id: string;
  name: string;
  description: string | null;
  isSystem: boolean;
  permissions: IAdminRolePermission[];
  admins: IAdminRoleAssignment[];
  createdAt: string;
  updatedAt: string;
}
