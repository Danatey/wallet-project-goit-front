import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {});

const token = createReducer(null, {});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {});

const isAuthenticated = createReducer(false, {});

export default combineReducers({
  user,
  isAuthenticated,
  token,
  error,
});
