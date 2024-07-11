import React, { createContext, useState } from 'react';
import axios from "axios";

// Create a context object
const defaultCompanyState = {
    defaultCompanyProfile: {},
};

export const CompanyContext = createContext({});

// Create a provider component
export const CompanyContextProvider = ({ children }) => {
  const url = "http://127.0.0.1:5000";  
  const { defaultCompanyProfile } = defaultCompanyState;
  const [companyProfile, setCompanyProfile] = useState(defaultCompanyProfile); // Define your initial state here

  const invokeGetCompanyProfile = async (symbol: string) => {
    try {
      const response = await axios.get(`${url}/company/profile/${symbol}`);
      setCompanyProfile(response.data[0]);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  }

  // const invokeGetCompanyFinancials = async (companyInfo: any) => {};

  // Provide the context value to children components
  const state = {
    companyProfile,
  }
  
  const api = {
    setCompanyProfile,
    getCompanyProfile: invokeGetCompanyProfile,
  }
  return (
    <CompanyContext.Provider value={{ state, api } }>
      {children}
    </CompanyContext.Provider>
  );
};

