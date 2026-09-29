import type { IDoctorWallet } from "./doctor-wallet.type";
import type { WalletTransactionStatus } from "./enum";
import type { WalletTransactionType } from "./enum";
import type { WithdrawalMethod } from "./enum";

export interface IWalletTransaction {
  id: string;
  walletId: string;
  type: WalletTransactionType;
  status: WalletTransactionStatus;
  amount: number;
  platformFee: number;
  netAmount: number;
  description: string | null;
  referenceType: string | null;
  referenceId: string | null;
  processedAt: string | null;
  failureReason: string | null;
  withdrawalMethod: WithdrawalMethod | null;
  accountNumber: string | null;
  wallet: IDoctorWallet;
  createdAt: string;
  updatedAt: string;
}
