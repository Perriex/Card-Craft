import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CircularProgress, Snackbar } from "@mui/material";

import Layout from "@CardCraft/components/Layout";
import { useAppDispatch, useAppSelector } from "@CardCraft/app/hooks";

import { hide, selectToast } from "@CardCraft/features/toast/toastSlice";

import "./App.css";

const HomePage = React.lazy(() => import("@CardCraft/pages/Home"));
const NotFoundPage = React.lazy(() => import("@CardCraft/pages/NotFound"));
const CardPage = React.lazy(() => import("@CardCraft/pages/Card"));

function App() {
  const toast = useAppSelector(selectToast);
  const dispatch = useAppDispatch();

  return (
    <BrowserRouter basename="/">
      <Layout>
        <Suspense
          fallback={
            <>
              <CircularProgress size={32} />
            </>
          }
        >
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
          onClose={() => dispatch(hide())}
        />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
