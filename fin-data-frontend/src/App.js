// src/components/MarketCapData.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MarketCapData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/company/historical-market-capitalization/AAPL');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Historical Market Capitalization Data</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            Date: {item.date}, Market Cap: {item.marketCap}
          </li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Financial Data App</h1>
      </header>
      <main>
        <MarketCapData />
      </main>
    </div>
  );
}

export default App;
