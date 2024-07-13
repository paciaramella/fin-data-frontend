import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: "white", // Change to your desired text color
        },
      },
    },
  },
});
