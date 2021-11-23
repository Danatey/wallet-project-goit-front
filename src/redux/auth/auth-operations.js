import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import cookie from "../../services/cookies";

import { BACK_END } from "../../assets/API/BACK_END";

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
      console.log(cookie);
      cookie.save("id", response.data.id, {
        expires: 7,
      });
      refresh_token.set(response.data.refresh_token);
      access_token.set(response.data.refresh_token);
      return response.data;
    } catch (err) {
      if (err.response.status === 409) {
        return rejectWithValue(toast.error("Вы уже зарегистрированы"));
      }
      if (err.response.status === 400) {
        return rejectWithValue(
          toast.error("Некорректные данные, попробуйте еще раз")
        );
      }
      return rejectWithValue(
        toast.error("Что-то пошло не так. Повторите попытку позже")
      );
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
      cookie.save("refresh_token", response.data.refresh_token, {
        expires: 7,
      });
      console.log(cookie);
      console.log(response.data.refresh_token);
      refresh_token.set(response.data.refresh_token);
      access_token.set(response.data.access_token);
      return response.data;
    } catch (err) {
      if (err.response.status === 401) {
        return rejectWithValue(
          toast.error(
            "Неверные данные. Проверьте логин и пароль или зарегистрируйтесь"
          )
        );
      }
      if (err.response.status === 400) {
        return rejectWithValue(
          toast.error("Некорректные данные, попробуйте еще раз")
        );
      }
      return rejectWithValue(
        toast.error("Что-то пошло не так. Повторите попытку позже")
      );
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
      return rejectWithValue(err.response.data);
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
      if (err.response.status === 409) {
        return thunkAPI.rejectWithValue(toast.error("Введите логин и пароль"));
      }
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
