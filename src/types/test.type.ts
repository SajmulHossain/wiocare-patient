import type { IReport } from "./report.type";
import type { IUser } from "./user.type";
import type { LabAlertStatus } from "./enum";
import type { LabResultFlag } from "./enum";

export interface ITest {
  id: string;
  name: string;
  patientId: string;
  refRange: string | null;
  referenceLow: number | null;
  referenceHigh: number | null;
  unit: string | null;
  value: string;
  testCode: string | null;
  analyteCode: string | null;
  flag: LabResultFlag;
  isTextResult: boolean;
  textValue: string | null;
  alertStatus: LabAlertStatus | null;
  acknowledgedBy: string | null;
  acknowledgedAt: string | null;
  acknowledged: IUser | null;
  isDeleted: boolean;
  deletedAt: string | null;
  deletedBy: string | null;
  createdAt: string;
  updatedAt: string;
  report: IReport | null;
  reportId: string | null;
}
