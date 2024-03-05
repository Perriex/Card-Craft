import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Button, CircularProgress, IconButton, Snackbar } from "@mui/material";

import Layout from "@CardCraft/components/Layout";
import { useAppSelector } from "@CardCraft/app/hooks";

import { hide, selectToast } from "@CardCraft/features/toast/toastSlice";

import { useDelete } from "./pages/api/Undo/Delete";

import CloseIcon from "@CardCraft/assets/svg/Close.svg";

import "./App.css";

const HomePage = React.lazy(() => import("@CardCraft/pages/Home"));
const NotFoundPage = React.lazy(() => import("@CardCraft/pages/NotFound"));
const CardPage = React.lazy(() => import("@CardCraft/pages/Card"));

function App() {
  const toast = useAppSelector(selectToast);

  const { cardId, dispatch, undoDeletedCard } = useDelete();

  const closeToast = () => dispatch(hide());
  
  return (
    <BrowserRouter basename="/">
      <Layout>
        <Suspense fallback={<CircularProgress size={32} />}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/add" element={<CardPage />} />
            <Route path="/edit/:id" element={<CardPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <Snackbar
          open={toast.open}
          autoHideDuration={5000}
          message={toast.message}
          onClose={closeToast}
          action={
            <React.Fragment>
              {cardId && (
                <Button
                  color="secondary"
                  size="small"
                  onClick={undoDeletedCard}
                >
                  UNDO
                </Button>
              )}
              <IconButton
                aria-label="close"
                color="inherit"
                sx={{ p: 0.5 }}
                onClick={closeToast}
              >
                <img src={CloseIcon} alt="Close Icon" />
              </IconButton>
            </React.Fragment>
          }
        />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
