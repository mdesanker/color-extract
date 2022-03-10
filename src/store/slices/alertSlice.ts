import { createSlice } from "@reduxjs/toolkit";

export interface Alert {
  id: string;
  msg: string;
}

const initialState: Alert[] = [];

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert: (state, { payload }) => {
      state = payload;
    },
    removeAlert: (state, { payload }) => {
      state = state.filter((alert) => alert.id !== payload);
    },
  },
});

export const { setAlert, removeAlert } = alertSlice.actions;

export default alertSlice.reducer;
