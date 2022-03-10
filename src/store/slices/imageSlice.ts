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
  reducers: {
    setImage: (state, { payload }) => {
      state.image = payload;
    },
    setImageURL: (state, { payload }) => {
      state.imageURL = payload;
    },
    clearImage: (state) => {
      state.image = null;
      state.imageURL = "";
    },
  },
});

export const { setImage, setImageURL, clearImage } = imageSlice.actions;

export default imageSlice.reducer;
