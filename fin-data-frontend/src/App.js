import React from "react";
import { CompanyContextProvider } from "./context/CompanyContext.tsx";
import { NewsContextProvider } from "./context/NewsContext.tsx";
import { EarningsContextProvider } from "./context/EarningsContext.tsx";
import MainComponent from "./components/MainComponent.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewsComponent from "./components/NewsComponent.tsx";

const RoutingComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/news" element={<NewsComponent />} />
      </Routes>
    </Router>
  );
};
function App() {
  return (
    <CompanyContextProvider>
      <NewsContextProvider>
        <EarningsContextProvider>
          <div style={{ bgcolor: "background.default" }}>
            <RoutingComponent />
          </div>
        </EarningsContextProvider>
      </NewsContextProvider>
    </CompanyContextProvider>
  );
}

export default App;
