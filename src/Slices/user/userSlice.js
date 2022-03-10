import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  uid: null,
  email: null,
  photo: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.email = action.payload.email;
      state.photo = action.payload.photo;
      state.uid = action.payload.uid;
      state.name = action.payload.name;
    },
    setLogOut: (state, action) => {
      state.email = null;
      state.name = null;
      state.uid = null;
      state.photo = null;
    },
  },
});

export const { setLogin, setLogOut } = userSlice.actions;

export const selectName = (state) => state.user.name;
export const selectEmail = (state) => state.user.email;
export const selectPhoto = (state) => state.user.photo;
export const selectUId = (state) => state.user.uid;

export default userSlice.reducer;
