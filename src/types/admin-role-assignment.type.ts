import type { IAdmin } from "./admin.type";
import type { IAdminRole } from "./admin-role.type";

export interface IAdminRoleAssignment {
  id: string;
  adminId: string;
  roleId: string;
  admin: IAdmin;
  role: IAdminRole;
  assignedAt: string;
}
