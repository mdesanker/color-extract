import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const timedAlert = createAsyncThunk<void, string>(
  "alert/timed",
  async (msg, { dispatch }) => {
    const id = uuidv4();

    dispatch(setAlert({ msg, id }));

    setTimeout(() => {
      dispatch(removeAlert(id));
    }, 3000);
  }
);

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
