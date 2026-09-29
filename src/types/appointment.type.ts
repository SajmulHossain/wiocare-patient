import type { AppointmentStatus } from "./enum";
import type { IDoctor } from "./doctor.type";
import type { IDoctorSlot } from "./doctor-slot.type";
import type { IPatient } from "./patient.type";
import type { IPayment } from "./payment.type";
import type { IQueueEntry } from "./queue-entry.type";
import type { IVideoCall } from "./video-call.type";

export interface IAppointment {
  id: string;
  complaints: string;
  doctorId: string;
  patientId: string;
  status: AppointmentStatus;
  remarks: string | null;
  appointmentDate: string;
  startTime: string;
  endTime: string;
  doctorSlotId: string | null;
  doctorSlot: IDoctorSlot | null;
  patient: IPatient;
  doctor: IDoctor;
  payments: IPayment[];
  videoCall: IVideoCall | null;
  queueEntry: IQueueEntry | null;
  cancellationTier: string | null;
  refundAmount: number | null;
  createdAt: string;
  updatedAt: string;
}
