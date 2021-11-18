import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { BACK_END } from "../../assets/API/BACK_END";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data: response } = await axios.post(
        `${BACK_END}/api/users/signup`,
        credentials
      );
      token.set(response.data.token);
      return response.data;
    } catch (err) {
      rejectWithValue(err.message);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data: response } = await axios.post(
        `${BACK_END}/api/users/login`,
        credentials
      );
      token.set(response.data.token);
      return response.data;
    } catch (err) {
      rejectWithValue(err.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post(`${BACK_END}/api/users/logout`);
      token.unset();
    } catch (err) {
      rejectWithValue(err.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const persistedToken = thunkAPI.getState().auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data: response } = await axios.get(`${BACK_END}/api/users/info`);
      return response.data;
    } catch (err) {
      thunkAPI.rejectWithValue(err.message);
    }
  }
);
