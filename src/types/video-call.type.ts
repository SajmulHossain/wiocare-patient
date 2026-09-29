import type { IAppointment } from "./appointment.type";
import type { VideoCallStatus } from "./enum";

export interface IVideoCall {
  id: string;
  appointmentId: string;
  channelName: string;
  status: VideoCallStatus;
  doctorJoinedAt: string | null;
  patientJoinedAt: string | null;
  doctorLeftAt: string | null;
  patientLeftAt: string | null;
  startedAt: string | null;
  endedAt: string | null;
  durationSeconds: number | null;
  appointment: IAppointment;
  createdAt: string;
  updatedAt: string;
}
