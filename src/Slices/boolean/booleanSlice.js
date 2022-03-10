import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  folderBool: false,
  photos: false,
  modelBool: false,
};

const booleanSlice = createSlice({
  name: "boolean",
  initialState,
  reducers: {
    setBoolean: (state, action) => {
      state.folderBool = action.payload.folderBool;
      state.photos = action.payload.photos;
      state.modelBool = action.payload.modelBool;
    },
  },
});

export const { setBoolean } = booleanSlice.actions;

export const selectFolderBool = (state) => state.boolean.folderBool;
export const selectPhotoBoolean = (state) => state.boolean.photos;
export const selectModelBoolean = (state) => state.boolean.modelBool;

export default booleanSlice.reducer;
