import React, { useContext, useState } from "react";
import { EarningsContext } from "../context/EarningsContext.tsx";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";
import axios from "axios";

const EarningsComponent = () => {
  const { state: earningsState } = useContext(EarningsContext);
  const { upcomingEarnings } = earningsState;
  console.log(JSON.stringify(upcomingEarnings, null, 4));
  const [symbolSearch, setSymbolSearch] = useState("");

  const getEarningsSurprisesAndUploadData = async (symbol: string) => {
    try {
      await axios
        .get(`http://127.0.0.1:5000/extract-data/${symbolSearch}`)
        .then(async (surprises: any) => {
          await axios.post(
            `http://127.0.0.1:5000/extract-data/${surprises.data}`
          );
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Upcoming Earnings
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Past Earnings
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Individual Earnings
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
      <TextField
        label="Enter Symbol/Ticker"
        variant="outlined"
        value={symbolSearch}
        onChange={(e) => setSymbolSearch(e.target.value)}
        style={{ margin: "16px" }}
        InputLabelProps={{
          sx: {},
        }}
      />
      <Button
        variant="outlined"
        style={{ margin: "16px" }}
        onClick={() => getEarningsSurprisesAndUploadData(symbolSearch)}
      >
        Search
      </Button>{" "}
    </div>
  );
};

export default EarningsComponent;
