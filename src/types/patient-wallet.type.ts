import type { IPatient } from "./patient.type";
import type { IPatientWalletLedger } from "./patient-wallet-ledger.type";

export interface IPatientWallet {
  id: string;
  patientId: string;
  balance: number;
  patient: IPatient;
  ledgers: IPatientWalletLedger[];
  createdAt: string;
  updatedAt: string;
}
