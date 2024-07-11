// src/components/MarketCapData.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { Container, Typography, Box, Button } from '@mui/material'; // Importing additional MUI components if needed


const MainComponent = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://127.0.0.1:5000/company/historical-market-capitalization/AAPL');
  //       setData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

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
        // Additional props as needed
      />
      {/* Other components or buttons can be added here */}
      <Button variant="contained" color="primary" sx={{ mt: 2, float: "right" }}>
        Submit
      </Button>
    </Box>
  </Container>
  );
};

function App() {
  return (
    <div className="App">
      <main>
        <MainComponent />
      </main>
    </div>
  );
}

export default App;
