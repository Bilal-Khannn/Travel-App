import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// initial state of login
const initialState = {
  email: "",
  password: "",
  token: "",
};

// create slice for login
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    //successful login attempt
    //failed login attempt
    //reset values of email and password
  },
});
