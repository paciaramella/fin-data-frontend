import React, { useContext, useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { CompanyContext } from "../../context/CompanyContext.tsx";
import HomeSidebar from "./HomeSidebar.tsx";

type Props = {};

const HomePage: React.FC<Props> = (props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={10} sx={{ overflow: "auto" }}>
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
      </Grid>
      <Grid item xs={10} sx={{ overflow: "auto" }}>
        <Card
          sx={{
            width: "60%",
            mt: 2,
            bgcolor: "background.default",
            display: "flex",
            flexDirection: "row",
            margin: "0px 16px 16px 18px",
          }}
        >
          <CardActions
            sx={{ display: "flex", flexDirection: "column" }}
          ></CardActions>
          <CardContent>
            <Typography variant="h2" fontSize={16}>
              What's Our Goal?
            </Typography>
            <Typography variant="h3" fontSize={14} margin={2}>
              {" "}
              <li>
                Finsider aims to simplify financial markets for beginners.
              </li>
              <li>
                Provide resources to help users learn the absolute basics of
                financial markets.
              </li>
              <li>Empower users to make educated financial decisions.</li>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default HomePage;
