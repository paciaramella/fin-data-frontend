import React, { useContext, useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CompanyContext } from "../context/CompanyContext.tsx";
import Sidebar from "./Sidebar.tsx";

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

  const CompanyLiveData = () => {
    return (
      <>
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
      </>
    );
  };

  return (
    <Card
      sx={{
        width: "85%",
        mt: 2,
        bgcolor: "background.default",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <CardActions sx={{ display: "flex", flexDirection: "column" }}>
        <Sidebar companyProfile={companyProfile} />
      </CardActions>
      <CardContent>
        <CompanyLiveData />
      </CardContent>
    </Card>
  );
};

export default CompanyCard;
