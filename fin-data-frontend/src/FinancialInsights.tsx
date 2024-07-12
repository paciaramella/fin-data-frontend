import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CompanyContext } from "./context/CompanyContext.tsx";

type Props = {};
const FinancialInsights: React.FC<Props> = () => {
  const { state, api } = useContext(CompanyContext);
  const { incomeStatements, balanceSheets, cashFlows } = state;
  return <>hi there</>;
};

export default FinancialInsights;
