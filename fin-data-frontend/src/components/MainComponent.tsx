import React, { useState, useContext, useEffect } from "react";
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
import { EarningsContext } from "../context/EarningsContext.tsx";
import EarningsComponent from "./EarningsComponent.tsx";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
// import StockPriceChart from "./StockPriceChart.tsx";
import HomePage from "./Home/HomePage.tsx";
import HomeSidebar from "./Home/HomeSidebar.tsx";

const MainComponent = () => {
  const LPtheme = createTheme(getLPTheme("dark"));
  const { state } = useContext(CompanyContext);
  const { state: newsState } = useContext(NewsContext);
  const { state: earningsState } = useContext(EarningsContext);
  const { generalNews } = newsState;
  const { companyProfile, showInsights, stockPriceChart } = state;
  const { upcomingEarnings } = earningsState;

  // const [openStockChart, setOpenStockChart] = useState<boolean>(false);
  // useEffect(() => {
  //   if (stockPriceChart.length > 0) {
  //     setOpenStockChart(true);
  //   }
  // }, [stockPriceChart]);
  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <AppAppBar mode={"dark"} toggleColorMode={() => {}} />
      <div style={{ display: "flex" }}>
        <HomeSidebar />
        <Container sx={{ bgcolor: "background.default", padding: "100px" }}>
          <HomePage />
          <Box style={{ display: "flex", flexDirection: "column" }}>
            {companyProfile?.companyName && (
              <>
                <CompanyCard companyProfile={companyProfile} />
                {showInsights && <FinancialInsights />}
              </>
            )}
          </Box>
          {generalNews && generalNews.length > 0 && <NewsComponent />}
          {upcomingEarnings && upcomingEarnings.length > 0 && (
            <EarningsComponent />
          )}
        </Container>
      </div>
      {/* <Modal open={openStockChart} onClose={() => setOpenStockChart(false)}>
        <StockPriceChart data={stockPriceChart} />
      </Modal> */}
    </ThemeProvider>
  );
};

export default MainComponent;
