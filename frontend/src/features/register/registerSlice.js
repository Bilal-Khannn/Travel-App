import { createSlice } from "@reduxjs/toolkit";

//create register slice
const registerSlice = createSlice({
  name: "register",
  initialState: {
    user: null,
    loading: null,
    error: null,
  },
  reducers: {
    //There can be request for registration, successful registration and failure to register
    //we create reducers for each of these scenarios

    //request for registration
    registerRequest: (state) => {
      state.loading = true;
      state.error = null;
    },

    //successful registration
    registerSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },

    //failure to register
    registerFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    //reset the state
    registerReset: (state) => {
      state.loading = null;
      state.user = null;
      state.error = null;
    },
  },
});

export const {
  registerRequest,
  registerSuccess,
  registerFailure,
  registerReset,
} = registerSlice.actions;

export default registerSlice.reducer;
