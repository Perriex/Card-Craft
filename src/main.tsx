import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { ThemeProvider } from "@mui/material";

import App from "./App.tsx";

import "./index.css";

import store from "@CardCraft/app/store";
import theme from "@CardCraft/style/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
