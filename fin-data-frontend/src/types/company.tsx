export type FinancialInsightsInfo = {
    cik?: any;
    symbol?: any;
    incomeParams: BasicSearchParams;
    balanceParams: BasicSearchParams;
    cashFlowParams: BasicSearchParams;
}

export type FinancialInsightsRes = {
    incomeStatementRes: any;
    balanceSheetStatementRes: any;
    cashFlowStatementRes: any;
}

export const defaultFinancialInsightsRes: FinancialInsightsRes  = {
    incomeStatementRes: {},
    balanceSheetStatementRes: {},
    cashFlowStatementRes: {},
}

type BasicSearchParams = {
    limit?: number;
    period?: string;
    datatype?: any;
}
