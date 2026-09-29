import type { IRider } from "./rider.type";
import type { IRiderWalletTransaction } from "./rider-wallet-transaction.type";
import type { WithdrawalMethod } from "./enum";

export interface IRiderWallet {
  id: string;
  riderId: string;
  currency: string;
  isActive: boolean;
  balance: string;
  cashInHand: string;
  totalEarning: string;
  withdrawalMethod: WithdrawalMethod | null;
  accountName: string | null;
  accountNumber: string | null;
  bankName: string | null;
  branchName: string | null;
  routingNumber: string | null;
  rider: IRider;
  transactions: IRiderWalletTransaction[];
  createdAt: string;
  updatedAt: string;
}
