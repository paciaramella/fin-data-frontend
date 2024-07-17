import React, { createContext, useState } from "react";
import axios from "axios";
import {
  ChartParams,
  FinancialInsightsInfo,
  SimpleQuote,
} from "../types/company.tsx";

interface NewsState {
  generalNews: Array<any>;
}

interface NewsApi {
  setGeneralNews: (generalNews: Array<any>) => void;
}

interface NewsContextType {
  state: NewsState;
  api: NewsApi;
}

const defaultNewsState: NewsState = {
  generalNews: [],
};

const defaultNewsApi: NewsApi = {
  setGeneralNews: (generalNews: any) => {},
};

const defaultNewsContext: NewsContextType = {
  state: defaultNewsState,
  api: defaultNewsApi,
};

export const NewsContext = createContext<NewsContextType>(defaultNewsContext);

// Create a provider component
export const NewsContextProvider = ({ children }) => {
  const url = "http://127.0.0.1:5000";
  const { generalNews: defaultGeneralNews } = defaultNewsState;
  const [generalNews, setGeneralNews] = useState(defaultGeneralNews);
  const state = {
    generalNews,
  };
  const api = {
    setGeneralNews,
  };

  return (
    <NewsContext.Provider value={{ state, api }}>
      {children}
    </NewsContext.Provider>
  );
};
