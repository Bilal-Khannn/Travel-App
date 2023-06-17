import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/register/registerSlice";
import authReducer from "../features/login/authSlice";

export const store = configureStore({
  reducer: {
    register: registerReducer,
    auth: authReducer,
  },
});
