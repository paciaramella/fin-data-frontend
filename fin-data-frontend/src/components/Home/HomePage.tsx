import React, { useContext, useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CompanyContext } from "../../context/CompanyContext.tsx";
import HomeSidebar from "./HomeSidebar.tsx";

type Props = {};

const HomePage: React.FC<Props> = (props) => {
  return (
    <>
      <Card
        sx={{
          width: "60%",
          mt: 2,
          bgcolor: "background.default",
          display: "flex",
          flexDirection: "row",
          margin: "16px",
        }}
      >
        <CardActions
          sx={{ display: "flex", flexDirection: "column" }}
        ></CardActions>
        <CardContent>
          <Typography variant="h2" fontSize={16}>
            Welcome to Finsider!
          </Typography>
          <Typography variant="h3" fontSize={14} margin={2}>
            {" "}
            Your homebase for learning key financial metrics, ratios, and
            information that impacts the markets and the overall economy.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default HomePage;
