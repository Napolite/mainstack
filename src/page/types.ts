export interface USerType {
  email: string;
  first_name: string;
  last_name: string;
}

export interface WalletType {
  balance: number;
  ledger_balance: number;
  pending_payout: number;
  total_payout: number;
  total_revenue: number;
}
