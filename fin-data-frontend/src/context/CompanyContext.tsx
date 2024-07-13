import React, { createContext, useState } from "react";
import axios from "axios";
import { FinancialInsightsInfo } from "../types/company.tsx";

interface CompanyState {
  companyProfile: any;
  showInsights: boolean;
  incomeStatements: Array<any>;
  balanceSheets: Array<any>;
  cashFlows: Array<any>;
}

interface CompanyApi {
  // state helpers
  setCompanyProfile: (companyProfile: any) => void;
  setShowInsights: (showInsights: boolean) => void;
  setIncomeStatements: (incomeStatements: Array<any>) => void;
  setBalanceSheets: (balanceSheets: Array<any>) => void;
  setCashFlows: (cashFlows: Array<any>) => void;

  // api functions
  getCompanyProfile: (symbol: string) => Promise<void>;
  getCompanyFinancials: (companyInfo: FinancialInsightsInfo) => Promise<void>;
}

interface CompanyContextType {
  state: CompanyState;
  api: CompanyApi;
}

const defaultCompanyState: CompanyState = {
  companyProfile: {},
  showInsights: false,
  incomeStatements: [],
  balanceSheets: [],
  cashFlows: [],
};

const defaultCompanyApi: CompanyApi = {
  setCompanyProfile: (companyProfile: any) => {},
  setShowInsights: (showInsights: boolean) => {},
  setIncomeStatements: (incomeStatements: any) => {},
  setBalanceSheets: (balanceSheets: Array<any>) => {},
  setCashFlows: (cashFlows: Array<any>) => {},
  getCompanyProfile: async (symbol: string) => {},
  getCompanyFinancials: async (companyInfo: FinancialInsightsInfo) => {},
};

const defaultCompanyContext: CompanyContextType = {
  state: defaultCompanyState,
  api: defaultCompanyApi,
};

export const CompanyContext = createContext<CompanyContextType>(
  defaultCompanyContext
);

// Create a provider component
export const CompanyContextProvider = ({ children }) => {
  const url = "http://127.0.0.1:5000";
  const {
    companyProfile: defaultCompanyProfile,
    showInsights: defaultShowInsights,
    incomeStatements: defaultIncomeStatements,
    balanceSheets: defaultBalanceSheets,
    cashFlows: defaultCashFlows,
  } = defaultCompanyState;
  const [companyProfile, setCompanyProfile] = useState(defaultCompanyProfile);
  const [showInsights, setShowInsights] = useState(defaultShowInsights);
  const [incomeStatements, setIncomeStatements] = useState<Array<any>>(
    defaultIncomeStatements
  );
  const [balanceSheets, setBalanceSheets] =
    useState<Array<any>>(defaultBalanceSheets);
  const [cashFlows, setCashFlows] = useState<Array<any>>(defaultCashFlows);

  const invokeGetCompanyProfile = async (symbol: string) => {
    try {
      const response = await axios.get(`${url}/company/profile/${symbol}`);
      setCompanyProfile(response.data[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const invokeGetCompanyFinancials = async (
    companyInfo: FinancialInsightsInfo
  ) => {
    const { cik, symbol, incomeParams, balanceParams, cashFlowParams } =
      companyInfo;
    const promises = [];
    promises.push(
      await axios.get(`${url}/income-statement/${symbol ? symbol : cik}`, {
        params: incomeParams,
      })
    );
    promises.push(
      await axios.get(
        `${url}/balance-sheet-statement/${symbol ? symbol : cik}`,
        { params: balanceParams }
      )
    );
    promises.push(
      await axios.get(`${url}/cash-flow-statement/${symbol ? symbol : cik}`, {
        params: cashFlowParams,
      })
    );
    const responses: Array<any> = await Promise.all(promises);
    const incomeStatementRes = responses[0].data;
    const balanceSheetStatementRes = responses[1].data;
    const cashFlowStatementRes = responses[2].data;
    setIncomeStatements(incomeStatementRes);
    setBalanceSheets(balanceSheetStatementRes);
    setCashFlows(cashFlowStatementRes);
    setShowInsights(true);
  };

  const state = {
    companyProfile,
    showInsights,
    incomeStatements,
    balanceSheets,
    cashFlows,
  };

  const api = {
    setShowInsights,
    setCompanyProfile,
    setIncomeStatements,
    setBalanceSheets,
    setCashFlows,
    getCompanyProfile: invokeGetCompanyProfile,
    getCompanyFinancials: invokeGetCompanyFinancials,
  };
  return (
    <CompanyContext.Provider value={{ state, api }}>
      {children}
    </CompanyContext.Provider>
  );
};
