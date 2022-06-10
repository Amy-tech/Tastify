import { configureStore } from "@reduxjs/toolkit";

// importing slices
import authSlice from "./Slices/authSlice";
export const authActions = authSlice.actions;

// REDUX STORE
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
