import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  fetchTransactions,
  addTransaction,
  fetchTransactionsByCategory,
} from "./transactions-operations";

const items = createReducer([], {
  [fetchTransactions.fulfilled]: (_, { payload }) => payload,
  [fetchTransactionsByCategory.fulfilled]: (_, { payload }) => payload,
  [addTransaction.fulfilled]: (state, { payload }) => [payload, ...state],
});

const isLoading = createReducer(false, {
  [fetchTransactions.pending]: () => true,
  [fetchTransactions.fulfilled]: () => false,
  [fetchTransactions.rejected]: () => false,
  [fetchTransactionsByCategory.pending]: () => true,
  [fetchTransactionsByCategory.fulfilled]: () => false,
  [fetchTransactionsByCategory.rejected]: () => false,
  [addTransaction.pending]: () => true,
  [addTransaction.fulfilled]: () => false,
  [addTransaction.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchTransactions.rejected]: (_, { payload }) => payload,
  [fetchTransactions.pending]: () => null,
  [fetchTransactionsByCategory.rejected]: (_, { payload }) => payload,
  [fetchTransactionsByCategory.pending]: () => null,
  [addTransaction.rejected]: (_, { payload }) => payload,
  [addTransaction.pending]: () => null,
});

export default combineReducers({
  items,
  isLoading,
  error,
});
