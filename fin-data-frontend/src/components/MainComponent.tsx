import React, { useState, useContext } from "react";
import { Container, Box, ThemeProvider } from "@mui/material"; // Importing additional MUI components if needed
import { CompanyContext } from "../context/CompanyContext.tsx";
import { NewsContext } from "../context/NewsContext.tsx";
import CompanyCard from "../components/CompanyCard.tsx";
import FinancialInsights from "../components/FinancialInsights.tsx";
import getLPTheme from "../theme.tsx";
import { createTheme } from "@mui/material/styles";
import AppAppBar from "../components/AppAppBar.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import NewsComponent from "../components/NewsComponent.tsx";

const MainComponent = () => {
  const LPtheme = createTheme(getLPTheme("dark"));
  const { state } = useContext(CompanyContext);
  const { state: newsState } = useContext(NewsContext);
  const { generalNews } = newsState;
  const { companyProfile, showInsights } = state;
  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <AppAppBar mode={"dark"} toggleColorMode={() => {}} />
      <Container sx={{ bgcolor: "background.default", padding: "100px" }}>
        <Box style={{ display: "flex", flexDirection: "column" }}>
          {companyProfile?.companyName && (
            <>
              <CompanyCard companyProfile={companyProfile} />
              {showInsights && <FinancialInsights />}
            </>
          )}
        </Box>
        {generalNews && generalNews.length > 0 && (
          <NewsComponent generalNews={generalNews} />
        )}
      </Container>
    </ThemeProvider>
  );
};

export default MainComponent;
