import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React, { useContext, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
type Props = {};

const HomeSidebar: React.FC<Props> = () => {
  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  };
  return (
    <List
      sx={{
        width: "120px",
        height: "100%",
        background: "#4F1502",
        borderRadius: "4px",
        marginTop: "115px",
      }}
    >
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText
            primary="Markets"
            sx={{ fontSize: 10 }}
            primaryTypographyProps={{ style: { color: "white" } }}
          />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText
            primary="Financial Statements"
            sx={{ fontSize: 10 }}
            primaryTypographyProps={{ style: { color: "white" } }}
          />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText
            primary="Statement Analysis"
            sx={{ fontSize: 10 }}
            primaryTypographyProps={{ style: { color: "white" } }}
          />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText
            primary="Valuation"
            sx={{ fontSize: 10 }}
            primaryTypographyProps={{ style: { color: "white" } }}
          />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText
            primary="Financial Data"
            sx={{ fontSize: 10 }}
            primaryTypographyProps={{ style: { color: "white" } }}
          />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText
            primary="Earnings"
            sx={{ fontSize: 10 }}
            primaryTypographyProps={{ style: { color: "white" } }}
          />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default HomeSidebar;
