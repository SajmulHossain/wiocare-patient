import type { IPatientWallet } from "./patient-wallet.type";
import type { WalletLedgerType } from "./enum";

export interface IPatientWalletLedger {
  id: string;
  walletId: string;
  amount: number;
  type: WalletLedgerType;
  source: string;
  sourceId: string;
  description: string | null;
  wallet: IPatientWallet;
  createdAt: string;
}
