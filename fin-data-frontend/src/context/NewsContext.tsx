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
  /* State Hooks */
  setGeneralNews: (generalNews: Array<any>) => void;

  /* API Calls */
  getNewsFeed: (page: number) => void;
}

interface NewsContextType {
  state: NewsState;
  api: NewsApi;
}

const defaultNewsState: NewsState = {
  generalNews: [],
};

const defaultNewsApi: NewsApi = {
  /* State Hooks */
  setGeneralNews: (generalNews: any) => {},
  /* API Calls */
  getNewsFeed: (page: number) => {},
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

  /* API Calls */
  const invokeGetNewsFeed = async (page: number) => {
    const response = await axios.get(
      `${url}/stock-news-sentiments-rss-feed?page=${page}`
    );
    console.log(response);
  };
  const state = {
    generalNews,
  };
  const api = {
    setGeneralNews,
    getNewsFeed: invokeGetNewsFeed,
  };

  return (
    <NewsContext.Provider value={{ state, api }}>
      {children}
    </NewsContext.Provider>
  );
};
