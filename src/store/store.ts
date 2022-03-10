import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import imageReducer from "./slices/imageSlice";
import alertReducer from "./slices/alertSlice";

export const store = configureStore({
  reducer: {
    image: imageReducer,
    alert: alertReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
