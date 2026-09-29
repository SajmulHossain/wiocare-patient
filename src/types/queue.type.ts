import type { IDoctor } from "./doctor.type";
import type { IQueueEntry } from "./queue-entry.type";

export interface IQueue {
  id: string;
  doctorId: string;
  date: string;
  currentServingId: string | null;
  isPaused: boolean;
  createdAt: string;
  updatedAt: string;
  doctor: IDoctor;
  entries: IQueueEntry[];
}
