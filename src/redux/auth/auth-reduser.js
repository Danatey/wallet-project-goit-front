import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { register, logIn, logOut, getCurrentUser } from "./auth-operations";
import { changeBalance } from "./auth-actions";

const initialUserState = { id: null, name: null, email: null, balance: null };

const user = createReducer(initialUserState, {
  // [logIn.fulfilled]: (_, { payload }) => payload.user,
  [register.fulfilled]: (_, { payload }) => payload.user,
  [logOut.fulfilled]: () => initialUserState,
  [getCurrentUser.fulfilled]: (_, { payload }) => payload,
  [changeBalance]: (state, { payload }) => {
    const changedBalance = parseFloat(state.balance) + parseFloat(payload);
    return { ...state, balance: changedBalance };
  },
});

const refresh_token = createReducer(null, {
  // [register.fulfilled]: (_, { payload }) => payload.refresh_token,
  [logIn.fulfilled]: (_, { payload }) => payload.refresh_token,
  [logOut.fulfilled]: () => null,
});

const access_token = createReducer(null, {
  // [register.fulfilled]: (_, { payload }) => payload.access_token,
  [logIn.fulfilled]: (_, { payload }) => payload.access_token,
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
  refresh_token,
  access_token,
  error,
});
