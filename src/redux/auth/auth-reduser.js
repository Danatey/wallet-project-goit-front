import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { register, logIn, logOut, getCurrentUser } from "./auth-operations";

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [register.fulfilled]: (_, { payload }) => payload.user,
  //[logIn.fulfilled]: (_, { payload }) => payload.user,
  [logOut.fulfilled]: () => initialUserState,
  [getCurrentUser.fulfilled]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  // [register.fulfilled]: (_, { payload }) => payload.token,
  [logIn.fulfilled]: (_, { payload }) => payload.token,
  [logOut.fulfilled]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [register.rejected]: setError,
  [logIn.rejected]: setError,
  [logOut.rejected]: setError,
  [getCurrentUser.rejected]: setError,
});

const isAuthenticated = createReducer(false, {
  [register.fulfilled]: () => false,
  [logIn.fulfilled]: () => true,
  [logOut.fulfilled]: () => false,
  [getCurrentUser.fulfilled]: () => true,
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
  error,
});
