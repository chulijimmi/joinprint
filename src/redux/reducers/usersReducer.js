import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    isLogin: false,
    token: null,
    error: false,
    errorMessage: null,
    profile: {},
  },
  reducers: {
    setUser(state, action) {
      state.error = false;
      state.isLogin = true;
      state.token = action.payload.token;
      state.errorMessage = null;
    },
    setErrorUser(state) {
      state.error = true;
      state.errorMessage = "Please check correctly";
    },
    setProfileUser(state, action) {
      state.profile = action.payload;
    },
    setSignOut(state) {
      state.isLogin = false;
      state.token = null;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
