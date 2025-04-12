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

interface TransactionMetadata {
  name: string;
  type: string;
  email: string;
  quantity: number;
  country: string;
  product_name: string;
  [key: string]: any; // allows additional metadata fields if needed
}

export interface Transaction {
  amount: number;
  date: string; // ISO format date string
  metadata: TransactionMetadata;
  payment_reference: string;
  status: "successful" | "failed" | "pending"; // you can adjust based on allowed values
  type: "deposit" | "withdrawal" | string; // expand or restrict as needed
}
