import type { IDoctor } from "./doctor.type";
import type { IWalletTransaction } from "./wallet-transaction.type";
import type { WithdrawalMethod } from "./enum";

export interface IDoctorWallet {
  id: string;
  doctorId: string;
  currency: string;
  isActive: boolean;
  withdrawalMethod: WithdrawalMethod | null;
  accountName: string | null;
  accountNumber: string | null;
  bankName: string | null;
  branchName: string | null;
  routingNumber: string | null;
  doctor: IDoctor;
  transactions: IWalletTransaction[];
  createdAt: string;
  updatedAt: string;
}
