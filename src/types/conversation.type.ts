import type { IMessage } from "./message.type";
import type { IPatient } from "./patient.type";

export interface IConversation {
  id: string;
  patientId: string;
  title: string;
  isDeleted: boolean;
  messages: IMessage[];
  patient: IPatient;
  createdAt: string;
  updatedAt: string;
}
