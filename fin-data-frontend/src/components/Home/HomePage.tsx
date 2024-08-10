import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
type Props = {};

const HomePage: React.FC<Props> = (props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sx={{ overflow: "auto" }}>
        <Card
          sx={{
            width: "90%",
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
      <Grid item xs={6} sx={{ overflow: "auto" }}>
        <Card
          sx={{
            width: "85%",
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
                Provide resources to help people learn the absolute basics of
                financial markets.
              </li>
              <li>Empower users to make educated financial decisions.</li>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sx={{ overflow: "auto" }}>
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
            <Typography
              variant="h2"
              fontSize={16}
              sx={{ marginBottom: "16px" }}
            >
              Markets
            </Typography>
            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography variant="h2" fontSize={14}>
                    Stock Market
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    variant="h2"
                    fontSize={14}
                    sx={{ marginBottom: "6px" }}
                  >
                    A market where shares of publicly traded companies are
                    bought and sold.
                  </Typography>
                  <Typography variant="h3" fontSize={14}>
                    <b>Examples:</b>
                    <li>New York Stock Exchange (NYSE)</li>
                    <li>NASDAQ</li>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                >
                  <Typography variant="h2" fontSize={14}>
                    Bond Market
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    variant="h2"
                    fontSize={14}
                    sx={{ marginBottom: "6px" }}
                  >
                    A market where debt securities (bonds) are issued and traded
                  </Typography>
                  <Typography variant="h3" fontSize={14}>
                    <b>Types of Bonds: </b>
                    <li>U.S. Treasury Bonds</li>
                    <li>Corporate Bonds</li>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default HomePage;
