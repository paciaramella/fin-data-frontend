import * as React from "react";
import { PaletteMode } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import ToggleColorMode from "./ToggleColorMode.tsx";
import { Container, Typography, Box, Button, TextField } from "@mui/material"; // Importing additional MUI components if needed
import { useState } from "react";
import { CompanyContext } from "../context/CompanyContext.tsx";
import Menu from "@mui/material/Menu";
import ToolbarMenu from "./ToolbarMenu.tsx";
import { NewsContext } from "../context/NewsContext.tsx";
import { EarningsContext } from "../context/EarningsContext.tsx";
import { useNavigate } from "react-router-dom";

interface AppAppBarProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

export default function AppAppBar({ mode, toggleColorMode }: AppAppBarProps) {
  const navigate = useNavigate();
  const { api } = React.useContext(CompanyContext);
  const { api: newsApi } = React.useContext(NewsContext);
  const { api: earningsApi } = React.useContext(EarningsContext);
  const { getNewsFeed } = newsApi;
  const { getCompanyProfile } = api;
  const { getEarnings } = earningsApi;
  // const [open, setOpen] = React.useState(false);
  const [symbolSearch, setSymbolSearch] = useState("");
  const [newsAnchorEl, setNewsAnchorEl] = React.useState<null | HTMLElement>(
    null
  );
  const handleNewsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setNewsAnchorEl(event.currentTarget);
  };
  const newsOpen = Boolean(newsAnchorEl);

  const getNews = async (page: number) => {
    await getNewsFeed(page);
    navigate("/news");
    setNewsAnchorEl(null);
  };

  const newsItems = [
    {
      label: "Feed",
      action: () => getNews(0),
    },
    {
      label: "Stock",
      action: () => setNewsAnchorEl(null),
    },
    {
      label: "Forex",
      action: () => setNewsAnchorEl(null),
    },
    {
      label: "Crypto",
      action: () => setNewsAnchorEl(null),
    },
    {
      label: "Press Releases",
      action: () => setNewsAnchorEl(null),
    },
  ];

  const [earnAnchorEl, setEarnAnchorEl] = React.useState<null | HTMLElement>(
    null
  );
  const handleEarnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setEarnAnchorEl(event.currentTarget);
  };
  const earnOpen = Boolean(earnAnchorEl);

  const getUpcomingEarnings = async (
    fromDateString: string,
    toDateString: string
  ) => {
    await getEarnings(fromDateString, toDateString);
  };

  const setDefaultDatesForEarnings = () => {
    const defaultFromDate = new Date();
    const defaultToDate = new Date(
      defaultFromDate.getFullYear(),
      (defaultFromDate.getMonth() % 4) + 4,
      31,
      23,
      69,
      69,
      999
    ).toISOString(); // end of year
    const fromDateString = defaultFromDate
      .toISOString()
      .substring(0, defaultFromDate.toISOString().indexOf("T"));
    const toDateString = defaultToDate.substring(0, defaultToDate.indexOf("T"));
    return { fromDateString, toDateString };
  };

  const invokeGetUpcomingEarnings = () => {
    const res = setDefaultDatesForEarnings();
    const fromDateString = res.fromDateString;
    const toDateString = res.toDateString;
    setNewsAnchorEl(null);
    getUpcomingEarnings(fromDateString, toDateString);
  };

  const earnItems = [
    {
      label: "Upcoming Earnings",
      action: () => invokeGetUpcomingEarnings(),
    },
    {
      label: "Past Earnings",
      action: () => setNewsAnchorEl(null),
    },
    {
      label: "Individual earnings",
      action: () => setNewsAnchorEl(null),
    },
  ];

  const [ipoAnchorEl, setIPOAnchorEl] = React.useState<null | HTMLElement>(
    null
  );
  const handleIPOClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIPOAnchorEl(event.currentTarget);
  };

  const ipoOpen = Boolean(ipoAnchorEl);
  const ipotems = [
    {
      label: "IPO Confirmed",
      action: () => setIPOAnchorEl(null),
    },
    {
      label: "IPO Prospectus",
      action: () => setIPOAnchorEl(null),
    },
    {
      label: "IPO Calendar",
      action: () => setIPOAnchorEl(null),
    },
  ];

  const handleSearchCompany = async () => {
    await getCompanyProfile(symbolSearch);
    navigate(`/company/${symbolSearch}`);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: "transparent",
        backgroundImage: "none",
        mt: 2,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          variant="regular"
          sx={(theme) => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
            borderRadius: "999px",
            backdropFilter: "blur(24px)",
            maxHeight: 40,
            border: "1px solid",
            borderColor: "divider",
            bgcolor: "hsla(220, 60%, 99%, 0.6)",
            boxShadow:
              "0 1px 2px hsla(210, 0%, 0%, 0.05), 0 2px 12px hsla(210, 100%, 80%, 0.5)",
            ...theme.applyStyles("dark", {
              bgcolor: "hsla(220, 0%, 0%, 0.7)",
              boxShadow:
                "0 1px 2px hsla(210, 0%, 0%, 0.5), 0 2px 12px hsla(210, 100%, 25%, 0.3)",
            }),
          })}
        >
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 0.5,
              alignItems: "center",
              margin: "8px",
            }}
          >
            <Typography variant="h2" fontSize={16}>
              Finsider
            </Typography>
            <TextField
              label="Enter Symbol/Ticker"
              variant="outlined"
              fullWidth
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
              onClick={handleSearchCompany}
            >
              Search
            </Button>
            <ToolbarMenu
              id="News"
              open={newsOpen}
              handleClick={handleNewsClick}
              anchorEl={newsAnchorEl}
              setAnchorEl={setNewsAnchorEl}
              items={newsItems}
            />
            <ToolbarMenu
              id="Earnings"
              open={earnOpen}
              handleClick={handleEarnClick}
              anchorEl={earnAnchorEl}
              setAnchorEl={setEarnAnchorEl}
              items={earnItems}
            />
            <ToolbarMenu
              id="IPOs"
              open={ipoOpen}
              handleClick={handleIPOClick}
              anchorEl={ipoAnchorEl}
              setAnchorEl={setIPOAnchorEl}
              items={ipotems}
            />
            <Button sx={{ width: "150px" }}>Index Perf</Button>
            <Button sx={{ width: "150px" }}>Economics</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
