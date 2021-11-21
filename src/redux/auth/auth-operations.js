import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import cookie from '../../services/cookies';

import { BACK_END } from '../../assets/API/BACK_END';

const refresh_token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const access_token = {
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
      refresh_token.set(response.data.refresh_token);
      access_token.set(response.data.refresh_token);
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
      refresh_token.set(response.data.refresh_token);
      access_token.set(response.data.access_token);
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
      refresh_token.unset();
      access_token.unset();
    } catch (err) {
      rejectWithValue(err.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const persistedRefreshToken = thunkAPI.getState().auth.refresh_token;
    const persistedAccessToken = thunkAPI.getState().auth.access_token;

    if (persistedRefreshToken === null || persistedAccessToken === null) {
      return thunkAPI.rejectWithValue();
    }
    refresh_token.set(persistedRefreshToken);
    access_token.set(persistedAccessToken);
    try {
      const { data: response } = await axios.get(`${BACK_END}/api/users/info`);
      return response.data;
    } catch (err) {
      thunkAPI.rejectWithValue(err.message);
    }
  }
);
