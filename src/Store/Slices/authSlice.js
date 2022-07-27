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
        displayName: action.payload.userData.displayName,
        email: action.payload.userData.email,
        // photoURL: null,
        idToken: action.payload.userData.idToken,
        kind: action.payload.userData.kind,
        registered: action.payload.userData.registered,
      };
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export default authSlice;
