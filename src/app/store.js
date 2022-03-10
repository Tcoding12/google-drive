import { configureStore } from "@reduxjs/toolkit";
import folderReducer from "../Slices/folder/folderSlice";
import userReducer from "../Slices/user/userSlice";
import booleanReducer from "../Slices/boolean/booleanSlice";
import displayReducer from "../Slices/photodisplay/displaySlice";

export const store = configureStore({
  reducer: {
    folder: folderReducer,
    user: userReducer,
    boolean: booleanReducer,
    display: displayReducer,
  },
});
