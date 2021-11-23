import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { register, logIn, logOut, getCurrentUser } from "./auth-operations";

const initialUserState = { id: null, name: null, email: null, balance: null };

const user = createReducer(initialUserState, {
  [register.fulfilled]: (_, { payload }) => payload.user,
  [logOut.fulfilled]: () => initialUserState,
  [getCurrentUser.fulfilled]: (_, { payload }) => payload,
});

const refresh_token = createReducer(null, {
  [logIn.fulfilled]: (_, { payload }) => payload.refresh_token,
  [logOut.fulfilled]: () => null,
});

const access_token = createReducer(null, {
  [logIn.fulfilled]: (_, { payload }) => payload.access_token,
  [logOut.fulfilled]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [register.rejected]: setError,
  [register.pending]: null,
  [logIn.rejected]: setError,
  [logIn.pending]: null,
  [logOut.rejected]: setError,
  [logOut.pending]: null,
  [getCurrentUser.rejected]: setError,
  [getCurrentUser.pending]: null,
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
  refresh_token,
  access_token,
  error,
});
