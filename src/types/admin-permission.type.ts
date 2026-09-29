import type { IAdminRolePermission } from "./admin-role-permission.type";

export interface IAdminPermission {
  id: string;
  resource: string;
  action: string;
  label: string;
  description: string | null;
  roles: IAdminRolePermission[];
  createdAt: string;
  updatedAt: string;
}
