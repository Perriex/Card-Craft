import { createTheme } from "@mui/material";

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
        containedPrimary: {
          backgroundColor: "#3ACCD2",
          boxShadow: "none",
          borderRadius: "12px",
          textTransform: "inherit",
          minHeight: "40px",
          ":hover": {
            backgroundColor: "#22C5CC",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
          border: "1px solid #EFEFEF",
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
          borderBottomColor: "#EFEFEF",
          fontSize: 16,
          color: "#000F10",
        },
        head: {
          backgroundColor: "#3ACCD2",
          color: "#fff",
          fontSize: 16,
        },
      },
    },
  },
  figmaPalette: {
    footer: "#7B7B7B",
    typography: "#000F10",
    primary: "#3ACCD2",
    success: "#57CE44",
    error: "#FF3A3A",
  },
});

export default theme;
