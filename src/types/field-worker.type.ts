import type { FieldWorkerStatus } from "./enum";
import type { IFieldShift } from "./field-shift.type";
import type { IFieldStop } from "./field-stop.type";
import type { IUser } from "./user.type";

export interface IFieldWorker {
  id: string;
  userId: string;
  status: FieldWorkerStatus;
  shifts: IFieldShift[];
  stops: IFieldStop[];
  user: IUser;
  createdAt: string;
  updatedAt: string;
}
