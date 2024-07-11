import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import { Container, Typography, Box, Button } from "@mui/material"; // Importing additional MUI components if needed
import { CompanyContext, CompanyContextProvider} from './context/CompanyContext.tsx';
const MainComponent = () => {
  const { state, api } = useContext(CompanyContext);
  const { companyProfile } = state;
  const { getCompanyProfile } = api;
  const [symbolSearch, setSymbolSearch] = useState('');
  console.log('symbol', symbolSearch)
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 3 }}>
        <Typography variant="h5" gutterBottom>
          Financial Data App
        </Typography>
        <TextField
          label="Please type in a company ticker and we will get some info for you."
          variant="outlined"
          fullWidth
          onChange={((e) => setSymbolSearch(e.target.value))}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2, float: "right" }}
          onClick={() => getCompanyProfile(symbolSearch)}
        >
          Submit
        </Button>
        {companyProfile && (
          companyProfile.companyName
        )}
      </Box>
    </Container>
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
