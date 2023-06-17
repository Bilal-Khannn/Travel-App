import { createSlice } from "@reduxjs/toolkit";

//grab user from local storage if available
const user = localStorage.getItem("user");

const initialState = {
  user: user ? user : null,
  loading: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginReset: (state) => {
      state.user = null;
      state.loading = null;
      state.error = null;
    },

    loginRequest: (state) => {
      state.loading = true;
      state.error = null;
    },

    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
    },

    loginFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, loginReset } =
  authSlice.actions;

export default authSlice.reducer;
