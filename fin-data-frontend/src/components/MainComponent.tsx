import React, { useState, useContext, useEffect } from "react";
import { Container, ThemeProvider } from "@mui/material"; // Importing additional MUI components if needed
import { CompanyContext } from "../context/CompanyContext.tsx";
import { NewsContext } from "../context/NewsContext.tsx";
import getLPTheme from "../theme.tsx";
import { createTheme } from "@mui/material/styles";
import AppAppBar from "../components/AppAppBar.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import { EarningsContext } from "../context/EarningsContext.tsx";
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
  const { companyProfile, showInsights } = state;
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
        </Container>
      </div>
      {/* <Modal open={openStockChart} onClose={() => setOpenStockChart(false)}>
        <StockPriceChart data={stockPriceChart} />
      </Modal> */}
    </ThemeProvider>
  );
};

export default MainComponent;
