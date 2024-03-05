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
        root: {
          boxShadow: "none",
          borderRadius: "12px",
          textTransform: "inherit",
          minHeight: "40px",
        },
        containedPrimary: {
          backgroundColor: "#3ACCD2",

          ":hover": {
            backgroundColor: "#22C5CC",
          },
        },
        outlinedError: {
          borderColor: "#FF3A3A",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "none",
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
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#000F10",
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
