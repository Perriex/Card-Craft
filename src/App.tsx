import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@mui/material";

import { store } from "@CardCraft/app/store";
import Sidebar from "@CardCraft/components/Sidebar";
import theme from "@CardCraft/style/theme";

import "./App.css";

const HomePage = React.lazy(() => import("@CardCraft/pages/Home"));
const NotFoundPage = React.lazy(() => import("@CardCraft/pages/NotFound"));
const CardPage = React.lazy(() => import("@CardCraft/pages/Card"));

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/add" element={<CardPage />} />
            <Route path="/edit/:id" element={<CardPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
        <Sidebar />
      </ThemeProvider>
    </Provider>
  );
}

export default App;