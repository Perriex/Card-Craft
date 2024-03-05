import { configureStore } from "@reduxjs/toolkit";

import querySlice from "@CardCraft/features/query/querySlice";
import toastSlice from "@CardCraft/features/toast/toastSlice";

 const store = configureStore({
  reducer: {
    query: querySlice,
    toast: toastSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
