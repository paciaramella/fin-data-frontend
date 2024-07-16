export type FinancialInsightsInfo = {
  cik?: any;
  symbol?: any;
  incomeParams: BasicSearchParams;
  balanceParams: BasicSearchParams;
  cashFlowParams: BasicSearchParams;
  keyMetricsParams: BasicSearchParams;
};

export type FinancialInsightsRes = {
  incomeStatementRes: any;
  balanceSheetStatementRes: any;
  cashFlowStatementRes: any;
};

export const defaultFinancialInsightsRes: FinancialInsightsRes = {
  incomeStatementRes: {},
  balanceSheetStatementRes: {},
  cashFlowStatementRes: {},
};

type BasicSearchParams = {
  limit?: number;
  period?: string;
  datatype?: any;
};

export type SimpleQuote = {
  price: any;
  volume: any;
  symbol: string;
  change: number;
  changesPercentage: string;
};

export type ChartParams = {
  seriesType: string;
  from: string;
  to: string;
};
