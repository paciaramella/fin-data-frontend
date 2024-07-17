import React, { useState, useContext } from "react";
import { Container, Box, ThemeProvider } from "@mui/material"; // Importing additional MUI components if needed
import {
  CompanyContext,
  CompanyContextProvider,
} from "./context/CompanyContext.tsx";
import { NewsContextProvider } from "./context/NewsContext.tsx";
import CompanyCard from "./components/CompanyCard.tsx";
import FinancialInsights from "./components/FinancialInsights.tsx";
import getLPTheme from "./theme.tsx";
import { createTheme } from "@mui/material/styles";
import AppAppBar from "./components/AppAppBar.tsx";
import CssBaseline from "@mui/material/CssBaseline";

const MainComponent = () => {
  const [mode, setMode] = React.useState("dark");
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const { state } = useContext(CompanyContext);
  const { companyProfile, showInsights } = state;
  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Container sx={{ bgcolor: "background.default", padding: "100px" }}>
        <Box style={{ display: "flex", flexDirection: "column" }}>
          {companyProfile?.companyName && (
            <>
              <CompanyCard companyProfile={companyProfile} />
            </>
          )}
        </Box>
      </Container>
      {showInsights && <FinancialInsights />}
    </ThemeProvider>
  );
};

function App() {
  return (
    <CompanyContextProvider>
      <NewsContextProvider>
        <div style={{ bgcolor: "background.default" }}>
          <MainComponent />
        </div>
      </NewsContextProvider>
    </CompanyContextProvider>
  );
}

export default App;
