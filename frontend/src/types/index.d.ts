export interface BillSummary {
  date: string;
  kwh: number;
  amount: number;
  tokensEarned?: number;
  status?: 'verified' | 'pending' | 'low-quality';
}

export interface TokenTransaction {
  id: string;
  amount: number;
  description: string;
  date: string;
}
