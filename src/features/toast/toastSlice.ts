import { RootState } from "@CardCraft/app/store";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ToastState {
  open: boolean;
  message?: string;
}

const initialState: ToastState = {
  open: false,
};

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    show: (state, action: PayloadAction<string>) => {
      state.open = true;
      state.message = action.payload;
    },
    hide: (state) => {
      state.open = false;
      state.message = undefined;
    },
  },
});

export const { show, hide } = toastSlice.actions;

export const selectToast = (state: RootState) => state.toast;

export default toastSlice.reducer;
