import type { IAppointment } from "./appointment.type";
import type { IPatient } from "./patient.type";
import type { PaymentProvider } from "./enum";
import type { PaymentStatus } from "./enum";

export interface IPayment {
  id: string;
  amount: number;
  currency: string;
  provider: PaymentProvider;
  status: PaymentStatus;
  transactionId: string;
  gatewayResponse: unknown | null;
  patientId: string;
  patient: IPatient;
  appointmentId: string | null;
  appointment: IAppointment | null;
  expiresAt: string;
  createdAt: string;
  updatedAt: string;
}
