import React, { useContext, useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import { CompanyContext } from "../context/CompanyContext.tsx";
import { AppBar, Tabs, Tab, Button, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import CssBaseline from "@mui/material/CssBaseline";

type Props = {};
const FinancialInsights: React.FC<Props> = () => {
  const { state, api } = useContext(CompanyContext);
  const { incomeStatements, keyMetrics } = state;
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
    // Handle tab change logic here, such as loading different statistics data
  };

  const allRevenues = incomeStatements.map((statement: any) => {
    return {
      year: statement.date.split("-")[0], // Extract the year from the date
      revenue: statement.revenue,
    };
  });

  const RevenueChart = (props: any) => {
    const { color } = props;
    return (
      <Box sx={{ margin: 2 }}>
        <BarChart
          series={[
            {
              data: allRevenues.map((data) => data.revenue / 1000000),
            },
          ]}
          xAxis={[
            {
              data: allRevenues.map((data) => data.year),
              label: "Revenue Over Time",
              scaleType: "band", // Ensure this is set to 'band' for categorical data
            },
          ]}
          height={400}
          width={450}
          margin={{ top: 20, right: 30, bottom: 40, left: 150 }} // Adjust margins to ensure labels are visible
          colors={[color]}
        />
      </Box>
    );
  };

  const allGrossProfits = incomeStatements.map((statement: any) => {
    return {
      year: statement.date.split("-")[0], // Extract the year from the date
      profit: statement.grossProfit,
    };
  });

  const GrossProfitChart = (props: any) => {
    const { color } = props;
    return (
      <Box>
        <BarChart
          series={[
            {
              data: allGrossProfits.map((data) => data.profit / 1000000),
            },
          ]}
          xAxis={[
            {
              data: allGrossProfits.map((data) => data.year),
              label: "Gross Profits Over Time",
              scaleType: "band", // Ensure this is set to 'band' for categorical data
            },
          ]}
          height={400}
          width={450}
          margin={{ top: 20, right: 30, bottom: 40, left: 150 }}
          colors={[color]}
        />
      </Box>
    );
  };
  const rows: GridRowsProp = keyMetrics.map((metrics: any, index: number) => {
    return { id: index, ...metrics };
  });

  const pinnedColumns = [
    { field: "symbol", headerName: "Symbol", width: 150, pinned: "left" },
    { field: "date", headerName: "Date", width: 150, pinned: "left" },
  ];

  const otherColummns = Object.keys(keyMetrics[0])
    .filter((metric: string) => metric !== "symbol" && metric !== "date")
    .map((metric: string) => {
      return { field: metric, headerName: metric, width: 150 };
    });

  const columns: GridColDef[] = [...pinnedColumns, ...otherColummns];

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (tabIndex == 0) {
      scrollToSection("Key Metrics");
    }
  }, [tabIndex]);

  return (
    <Box style={{ padding: "16px", justifyContent: "center" }}>
      <AppBar position="static">
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          aria-label="Statistics Tabs"
          TabIndicatorProps={{
            style: { background: "white" }, // Example for changing the indicator color
          }}
        >
          <Tab label="Key Metrics" />
          <Tab label="Income Statements" />
        </Tabs>
      </AppBar>
      {tabIndex === 0 && (
        <div style={{ height: 1000, width: "100%" }} id={"Key Metrics"}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              columns: {
                columnVisibilityModel: {
                  symbol: true,
                  date: true,
                  // Set visibility for other columns as needed
                },
              },
            }}
            columnVisibilityModel={{
              symbol: true,
              date: true,
              // Set visibility for other columns as needed
            }}
          />
        </div>
      )}
      {tabIndex === 1 && (
        <Grid container spacing={2}>
          <Grid item xs={4} sx={{ overflow: "auto" }}>
            <RevenueChart color={"#ffcccb"} />
          </Grid>
          <Grid item xs={4} sx={{ overflow: "auto" }}>
            <GrossProfitChart color={"#87ceeb"} />
          </Grid>
          <Grid item xs={4}>
            <RevenueChart color={"#8884d8"} />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default FinancialInsights;
