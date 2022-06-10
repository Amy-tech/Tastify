import { createSlice } from "@reduxjs/toolkit";

// AUTH SLICE
const authSlice = createSlice({
  name: "AUTH",
  initialState: {
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    loginUser: (state, action) => {
      state.isLoggedIn = true;
      state.user = {
        displayName: action.payload.displayName,
        email: action.payload.email,
        idToken: action.payload.idToken,
        kind: action.payload.kind,
        registered: action.payload.registered,
      };
    },
    logoutUser: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});

export default authSlice;
