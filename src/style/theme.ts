import { createTheme } from "@mui/material";

import { FigmaColors } from "./colors";

declare module "@mui/material/styles" {
  interface Theme {
    figmaPalette: {
      footer: string;
      typography: string;
      primary: string;
      success: string;
      error: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    figmaPalette?: {
      footer: string;
      typography: string;
      primary: string;
      success: string;
      error: string;
    };
  }
}

const theme = createTheme({
  typography: {
    fontFamily: ["Andika", "sans-serif"].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderRadius: "12px",
          textTransform: "inherit",
          minHeight: "40px",
        },
        containedPrimary: {
          backgroundColor: FigmaColors.primary,

          ":hover": {
            backgroundColor: FigmaColors.primaryHover,
          },
        },
        outlinedError: {
          borderColor: FigmaColors.error,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          border: "1px solid " + FigmaColors.border,
          borderRadius: "6px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          padding: "0 14px",
        },
        input: {
          "::placeholder": {
            fontSize: "0.75rem",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottomColor: FigmaColors.border,
          fontSize: 16,
          color: "#000F10",
        },
        head: {
          backgroundColor: FigmaColors.primary,
          color: "white",
          fontSize: 16,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: FigmaColors.typography,
        },
      },
    },
  },
  figmaPalette: {
    footer: FigmaColors.disabled,
    typography: FigmaColors.typography,
    primary: FigmaColors.primary,
    success: FigmaColors.success,
    error: FigmaColors.error,
  },
});

export default theme;
