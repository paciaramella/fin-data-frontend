import * as React from "react";
import { PaletteMode } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ToggleColorMode from "./ToggleColorMode.tsx";
import { Container, Typography, Box, Button, TextField } from "@mui/material"; // Importing additional MUI components if needed
import { useState } from "react";
import { CompanyContext } from "../context/CompanyContext.tsx";

interface AppAppBarProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

export default function AppAppBar({ mode, toggleColorMode }: AppAppBarProps) {
  const { state, api } = React.useContext(CompanyContext);
  const { getCompanyProfile } = api;
  const [open, setOpen] = React.useState(false);
  const [symbolSearch, setSymbolSearch] = useState("");

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

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
      setOpen(false);
    }
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
            <TextField
              label="Please type in a company ticker and we will get some info for you."
              variant="outlined"
              fullWidth
              value={symbolSearch}
              onChange={(e) => setSymbolSearch(e.target.value)}
              style={{ margin: "16px" }}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ margin: "16px" }}
              onClick={() => getCompanyProfile(symbolSearch)}
            >
              Submit
            </Button>
            {/* <div style={{ marginLeft: "auto" }}>
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
            </div> */}
          </Box>
          <Box sx={{ display: { sm: "flex", md: "none" } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <ToggleColorMode
                    mode={mode}
                    toggleColorMode={toggleColorMode}
                  />
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 3 }} />
                <MenuItem onClick={() => scrollToSection("features")}>
                  Features
                </MenuItem>
                <MenuItem onClick={() => scrollToSection("testimonials")}>
                  Testimonials
                </MenuItem>
                <MenuItem onClick={() => scrollToSection("highlights")}>
                  Highlights
                </MenuItem>
                <MenuItem onClick={() => scrollToSection("pricing")}>
                  Pricing
                </MenuItem>
                <MenuItem onClick={() => scrollToSection("faq")}>FAQ</MenuItem>
                <MenuItem>
                  <Button color="primary" variant="contained" fullWidth>
                    Sign up
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="outlined" fullWidth>
                    Sign in
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
