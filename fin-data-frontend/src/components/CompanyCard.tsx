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
  const [liveChange, setLiveChange] = useState(0);
  const [livePctChange, setLivePctChange] = useState("");
  const [changeColor, setChangeColor] = useState("#28a745");

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
      const res = await getCompanyPrice(symbol);
      const newPrice = res.price;
      const newChange = res.change;
      const newPercentageChange = res.changesPercentage;
      setLivePrice(newPrice);
      setLiveChange(newChange);
      setLivePctChange(newPercentageChange);
      setChangeColor(newChange < 0 ? "#dc3545" : "#28a745");
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card sx={{ width: "85%", mt: 2, bgcolor: "background.default" }}>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} variant="h1" gutterBottom>
          {companyName} - {symbol}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
        <div
          style={{
            display: "flex",
          }}
        >
          <Typography
            variant="h2"
            sx={{ marginRight: "16px" }}
          >{`$${livePrice}`}</Typography>
          <Typography
            color={changeColor}
            variant="h4"
          >{`${liveChange} (${livePctChange}%)`}</Typography>
        </div>
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
