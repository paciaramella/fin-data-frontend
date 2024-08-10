import React, { useContext } from "react";
import { CompanyContext } from "../context/CompanyContext.tsx";
import FinancialInsights from "./FinancialInsights.tsx";
import { Box } from "@mui/material";
import CompanyCard from "./CompanyCard.tsx";

const Company = () => {
  const { state } = useContext(CompanyContext);
  const { companyProfile, showInsights } = state;
  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>
      {companyProfile?.companyName && (
        <>
          <CompanyCard companyProfile={companyProfile} />
          {showInsights && <FinancialInsights />}
        </>
      )}
    </Box>
  );
};

export default Company;
