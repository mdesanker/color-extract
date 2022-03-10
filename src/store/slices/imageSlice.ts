import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadImage = createAsyncThunk<any, File>(
  "image/load",
  async (file, { dispatch, rejectWithValue }) => {
    try {
      dispatch(setImage(file.name));

      const url = URL.createObjectURL(file);
      console.log(url);

      return url;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  }
);

export interface ImageState {
  image: string | undefined;
  imageURL: string;
}

const initialState: ImageState = {
  image: undefined,
  imageURL: "",
};

const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    setImage: (state, { payload }) => {
      state.image = payload;
    },
    clearImage: (state) => {
      state.image = undefined;
      state.imageURL = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadImage.fulfilled, (state, { payload }) => {
      state.imageURL = payload;
    });
  },
});

export const { setImage, clearImage } = imageSlice.actions;

export default imageSlice.reducer;
