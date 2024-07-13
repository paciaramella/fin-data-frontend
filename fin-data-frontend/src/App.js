import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import {
  Container,
  Typography,
  Box,
  Button,
  ThemeProvider,
} from "@mui/material"; // Importing additional MUI components if needed
import {
  CompanyContext,
  CompanyContextProvider,
} from "./context/CompanyContext.tsx";
import CompanyCard from "./components/CompanyCard.tsx";
import FinancialInsights from "./components/FinancialInsights.tsx";
import { theme } from "./theme.tsx";
const MainComponent = () => {
  const { state, api } = useContext(CompanyContext);
  const { companyProfile, showInsights } = state;
  const { getCompanyProfile, setCompanyProfile } = api;
  const [symbolSearch, setSymbolSearch] = useState("");

  const clearSearch = () => {
    setSymbolSearch("");
    setCompanyProfile({});
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Box
          sx={{ mt: 3 }}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Typography variant="h5" gutterBottom>
            Financial Data App
          </Typography>
          <TextField
            label="Please type in a company ticker and we will get some info for you."
            variant="outlined"
            fullWidth
            value={symbolSearch}
            onChange={(e) => setSymbolSearch(e.target.value)}
          />
          {companyProfile?.companyName ? (
            <>
              <CompanyCard companyProfile={companyProfile} />
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                onClick={clearSearch}
              >
                Clear
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={() => getCompanyProfile(symbolSearch)}
            >
              Submit
            </Button>
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
      <div className="App">
        <main>
          <MainComponent />
        </main>
      </div>
    </CompanyContextProvider>
  );
}

export default App;
