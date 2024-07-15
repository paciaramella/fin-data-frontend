import React, { useContext } from "react";
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
  const { getCompanyFinancials } = api;
  const { companyProfile } = props;
  const { companyName, symbol, price, volAvg, website } = companyProfile;

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

  return (
    <Card sx={{ minWidth: 275, mt: 2, bgcolor: "background.default" }}>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} gutterBottom>
          {companyName}
        </Typography>
        <Typography variant="h5" component="div"></Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {symbol}
        </Typography>
        <Typography variant="body1">{`Price: $${price}`}</Typography>
        <Typography variant="body1">{`Average Volume: ${volAvg}`}</Typography>
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
