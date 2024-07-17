import * as React from "react";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material"; // Importing additional MUI components if needed
import { useState } from "react";
import { CompanyContext } from "../context/CompanyContext.tsx";
import Menu from "@mui/material/Menu";

type Props = {
  id: string;
  open: boolean;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  anchorEl: null | HTMLElement;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  items: Array<{ label: string; action: Function }>;
};
const ToolbarMenu: React.FC<Props> = (props) => {
  const { id, open, handleClick, anchorEl, setAnchorEl, items } = props;
  return (
    <>
      <Button
        id={`${id}-button`}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        News
      </Button>
      <Menu
        id={`${id}-menu`}
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        {items.map((item: { label: string; action: Function }) => {
          return (
            <MenuItem onClick={() => item.action()}>{item.label}</MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default ToolbarMenu;
