import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { BACK_END } from "../../assets/API/BACK_END";

export const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",
  async (_, { rejectWithValue }) => {
    try {
      const { data: response } = await axios.get(
        `${BACK_END}/api/transactions`
      );
      // console.log(response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  "transactions/addTransaction",
  async (transactionBody, { rejectWithValue }) => {
    try {
      const { data: response } = await axios.post(
        `${BACK_END}/api/transactions/create`,
        transactionBody
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchTransactionsByCategory = createAsyncThunk(
  "transactions/fetchTransactionsByCategory",
  async (_, { rejectWithValue }) => {
    try {
      const { data: response } = await axios.get(
        `${BACK_END}/api/transactions/categories`
      );
      // console.log(response.data);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getTransactionDate = createAsyncThunk(
  "transactions/getTransactionDate",
  async ({ month, year }, { rejectWithValue }) => {
    try {
      const { data: response } = await axios.get(
        `${BACK_END}/api/transactions/categories?month=${month}&year=${year}`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const getTransactionsList = createAsyncThunk(
  "transactions/getTransactionsList",
  async (_, { rejectWithValue }) => {
    try {
      const { data: response } = await axios.get(
        `${BACK_END}/api/transactions/list`
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
