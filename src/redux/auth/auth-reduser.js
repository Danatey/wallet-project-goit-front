import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import authActions from "./auth-actions";

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [authActions.registerSuccess]: (_, { payload: { user } }) => ({ ...user }),
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [authActions.registerError]: setError,
  [authActions.loginError]: setError,
});

const isAuthenticated = createReducer(false, {
  [authActions.registerSuccess]: () => true,
  [authActions.loginSuccess]: () => true,

  [authActions.registerError]: () => false,
  [authActions.loginError]: () => false,
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
  error,
});
