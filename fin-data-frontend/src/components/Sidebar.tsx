import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React, { useContext, useState, useEffect } from "react";
import { CompanyContext } from "../context/CompanyContext.tsx";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
type Props = {
  companyProfile: any;
};

const Sidebar: React.FC<Props> = (props) => {
  const { api } = useContext(CompanyContext);
  const { getCompanyFinancials, getCompanyPrice } = api;
  const { companyProfile } = props;
  //   const { companyName, symbol, price, volAvg, website } = companyProfile;

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
    <List>
      <ListItem disablePadding>
        <ListItemButton
          onClick={() => getCompanyFinancials(financialInsightParams)}
        >
          <ListItemText primary="Key Metrics" sx={{ fontSize: 10 }} />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding></ListItem>
    </List>
  );
};

export default Sidebar;
