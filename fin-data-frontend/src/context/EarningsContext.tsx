import React, { createContext, useState } from "react";
import axios from "axios";
import {
  ChartParams,
  FinancialInsightsInfo,
  SimpleQuote,
} from "../types/company.tsx";

interface EarningsState {
  upcomingEarnings: Array<any>;
}

interface EarningsApi {
  /* State Hooks */
  setUpcomingEarnings: (upcomingEarnings: Array<any>) => void;

  /* API Calls */
}

interface EarningsContextType {
  state: EarningsState;
  api: EarningsApi;
}

const defaultEarningsState: EarningsState = {
  upcomingEarnings: [],
};

const defaultEarningsApi: EarningsApi = {
  /* State Hooks */
  setUpcomingEarnings: (upcomingEarnings: any) => {},
  /* API Calls */
};

const defaultEarningsContext: EarningsContextType = {
  state: defaultEarningsState,
  api: defaultEarningsApi,
};

export const EarningsContext = createContext<EarningsContextType>(
  defaultEarningsContext
);

// Create a provider component
export const EarningsContextProvider = ({ children }) => {
  const url = "http://127.0.0.1:5000";
  const { upcomingEarnings: defaultUpcomingEarnings } = defaultEarningsState;
  const [upcomingEarnings, setUpcomingEarnings] = useState(
    defaultUpcomingEarnings
  );

  /* API Calls */
  const state = {
    upcomingEarnings,
  };
  const api = {
    setUpcomingEarnings,
  };

  return (
    <EarningsContext.Provider value={{ state, api }}>
      {children}
    </EarningsContext.Provider>
  );
};
