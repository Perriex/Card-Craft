import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface QueryState {
  cardId: number | null;
  previousValues: string | null;
  action: "CREATE" | "UPDATE" | "DELETE" | null;
}

const initialState: QueryState = {
  cardId: null,
  previousValues: null,
  action: null,
};

export const quertSlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<QueryState>) => {
      state.cardId = action.payload.cardId;
      state.previousValues = action.payload.previousValues;
      state.action = action.payload.action;
    },
    remove: (state) => {
      state.cardId = null;
      state.previousValues = null;
      state.action = null;
    },
  },
});

export const { add, remove } = quertSlice.actions;

export default quertSlice.reducer;