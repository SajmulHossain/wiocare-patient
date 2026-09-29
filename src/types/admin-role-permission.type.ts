import type { IAdminPermission } from "./admin-permission.type";
import type { IAdminRole } from "./admin-role.type";

export interface IAdminRolePermission {
  id: string;
  roleId: string;
  permissionId: string;
  role: IAdminRole;
  permission: IAdminPermission;
  createdAt: string;
  updatedAt: string;
}
