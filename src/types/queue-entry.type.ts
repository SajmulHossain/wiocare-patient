import type { IAppointment } from "./appointment.type";
import type { IPatient } from "./patient.type";
import type { IQueue } from "./queue.type";
import type { QueueEntryStatus } from "./enum";

export interface IQueueEntry {
  id: string;
  queueId: string;
  patientId: string;
  appointmentId: string;
  position: number;
  status: QueueEntryStatus;
  arrivalTime: string | null;
  etaMinutes: number | null;
  createdAt: string;
  updatedAt: string;
  queue: IQueue;
  patient: IPatient;
  appointment: IAppointment;
}
