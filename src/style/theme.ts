import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    figmaPalette: {
      footer: string;
      typography: string;
      primary: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    figmaPalette?: {
      footer: string;
      typography: string;
      primary: string;
    };
  }
}

const theme = createTheme({
  typography: {
    fontFamily: ["Andika", "sans-serif"].join(","),
  },
  figmaPalette: {
    footer: "#7B7B7B",
    typography: "#000F10",
    primary: "#22C5CC",
  },
});

export default theme;
