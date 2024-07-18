import React from "react";
import { CompanyContextProvider } from "./context/CompanyContext.tsx";
import { NewsContextProvider } from "./context/NewsContext.tsx";
import { EarningsContextProvider } from "./context/EarningsContext.tsx";
import MainComponent from "./components/MainComponent.tsx";

function App() {
  return (
    <CompanyContextProvider>
      <NewsContextProvider>
        <EarningsContextProvider>
          <div style={{ bgcolor: "background.default" }}>
            <MainComponent />
          </div>
        </EarningsContextProvider>
      </NewsContextProvider>
    </CompanyContextProvider>
  );
}

export default App;
