import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:3001";

export const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",
  async (_, { rejectWithValue }) => {
    try {
      const { data: response } = await axios.get("/api/transactions");
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
        "/api/transactions/create",
        transactionBody
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
