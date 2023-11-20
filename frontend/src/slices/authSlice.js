import { createSlice } from "@reduxjs/toolkit";

// replaced local storage with session storage for enhanced security

const initialState = {
  userInfo: sessionStorage.getItem("userInfo")
    ? JSON.parse(sessionStorage.getItem("userInfo"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials(state, action) {
      state.userInfo = action.payload;
      sessionStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logout(state, action) {
      state.userInfo = null;
      sessionStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;

// const initialState = {
//   userInfo: localStorage.getItem("userInfo")
//     ? JSON.parse(localStorage.getItem("userInfo"))
//     : null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setCredentials(state, action) {
//       state.userInfo = action.payload;
//       localStorage.setItem("userInfo", JSON.stringify(action.payload));
//     },
//     logout(state, action) {
//       state.userInfo = null;
//       localStorage.removeItem("userInfo");
//     },
//   },
// });

// export const { setCredentials, logout } = authSlice.actions;

// export default authSlice.reducer;
