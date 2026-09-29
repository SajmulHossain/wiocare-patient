import type { IRiderWallet } from "./rider-wallet.type";
import type { WalletTransactionStatus } from "./enum";
import type { WalletTransactionType } from "./enum";
import type { WithdrawalMethod } from "./enum";

export interface IRiderWalletTransaction {
  id: string;
  walletId: string;
  type: WalletTransactionType;
  status: WalletTransactionStatus;
  amount: string;
  platformFee: string;
  netAmount: string;
  description: string | null;
  referenceType: string | null;
  referenceId: string | null;
  processedAt: string | null;
  failureReason: string | null;
  withdrawalMethod: WithdrawalMethod | null;
  accountNumber: string | null;
  wallet: IRiderWallet;
  createdAt: string;
  updatedAt: string;
}
