import React, { useContext, useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CompanyContext } from "../context/CompanyContext.tsx";

type Props = {
  companyProfile: any;
};

const CompanyCard: React.FC<Props> = (props) => {
  const { api } = useContext(CompanyContext);
  const { getCompanyFinancials, getCompanyPrice } = api;
  const { companyProfile } = props;
  const { companyName, symbol, price, volAvg, website } = companyProfile;
  const [livePrice, setLivePrice] = useState(price);
  const financialInsightParams = {
    symbol: companyProfile.symbol,
    incomeParams: {
      period: "quarter",
      limit: 100,
    },
    balanceParams: {
      period: "quarter",
      limit: 100,
    },
    cashFlowParams: {
      period: "quarter",
      limit: 100,
    },
    keyMetricsParams: {
      period: "quarter",
      limit: 100,
    },
  };

  useEffect(() => {
    // resets live stock price every second
    const interval = setInterval(async () => {
      const newPrice = (await getCompanyPrice(symbol)).price;
      console.log("newPrice", newPrice);
      setLivePrice(newPrice);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card sx={{ minWidth: 275, mt: 2, bgcolor: "background.default" }}>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} variant="h1" gutterBottom>
          {companyName} - {symbol}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
        <Typography variant="h2">{`$${livePrice}`}</Typography>
        <Typography variant="body1">{`Volume: ${volAvg}`}</Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", flexDirection: "column" }}>
        <a>
          <Button size="small" href={website}>
            Learn More
          </Button>
        </a>
        <Button
          size="small"
          onClick={() => getCompanyFinancials(financialInsightParams)}
        >
          Financial Insights
        </Button>
      </CardActions>
    </Card>
  );
};

export default CompanyCard;
