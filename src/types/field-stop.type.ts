import type { FieldStopType } from "./enum";
import type { IFieldShift } from "./field-shift.type";
import type { IFieldWorker } from "./field-worker.type";
import type { IPatient } from "./patient.type";
import type { StopStatus } from "./enum";

export interface IFieldStop {
  id: string;
  workerId: string;
  shiftId: string;
  patientId: string;
  type: FieldStopType;
  status: StopStatus;
  address: string | null;
  latitude: number | null;
  longitude: number | null;
  positionIndex: number;
  etaMinutes: number | null;
  notes: string | null;
  outcomeReason: string | null;
  worker: IFieldWorker;
  shift: IFieldShift;
  patient: IPatient;
  createdAt: string;
  updatedAt: string;
}
