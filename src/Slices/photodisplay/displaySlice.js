import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  photo: null,
  title: null,
};

const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    setPhotoDisplay: (state, action) => {
      state.photo = action.payload.photo;
      state.title = action.payload.title;
    },
  },
});

export const { setPhotoDisplay } = displaySlice.actions;

export const selectPhotoDisplay = (state) => state.display.photo;
export const selectTitleDisplay = (state) => state.display.title;

export default displaySlice.reducer;
