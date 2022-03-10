import { createSlice } from "@reduxjs/toolkit";

export interface ImageState {
  image: any;
  imageURL: string;
}

const initialState: ImageState = {
  image: null,
  imageURL: "",
};

const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {},
});

// export const {} = imageSlice.actions;

export default imageSlice.reducer;
