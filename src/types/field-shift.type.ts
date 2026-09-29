import type { IFieldStop } from "./field-stop.type";
import type { IFieldWorker } from "./field-worker.type";
import type { ShiftStatus } from "./enum";

export interface IFieldShift {
  id: string;
  workerId: string;
  token: string;
  deviceInfo: string | null;
  startTime: string;
  endTime: string | null;
  status: ShiftStatus;
  cashCollected: number;
  cashOutstanding: number;
  worker: IFieldWorker;
  stops: IFieldStop[];
  createdAt: string;
  updatedAt: string;
}
