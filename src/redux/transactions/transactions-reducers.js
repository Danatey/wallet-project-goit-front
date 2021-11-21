import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  fetchTransactions,
  addTransaction,
  // fetchTransactionsByCategory,
  getTransactionDate,
  getTransactionsList,
} from "./transactions-operations";

// const categories = createReducer([], {
//   [fetchTransactionsByCategory.fulfilled]: (_, { payload }) => payload,
// });

const stats = createReducer(null, {
  [getTransactionDate.fulfilled]: (_, { payload }) => payload,
});

const categoriesList = createReducer(null, {
  [getTransactionsList.fulfilled]: (_, { payload }) => payload,
});

const items = createReducer([], {
  [fetchTransactions.fulfilled]: (_, { payload }) => payload,
  [addTransaction.fulfilled]: (state, { payload }) => [payload, ...state],
});

const isLoading = createReducer(false, {
  [fetchTransactions.pending]: () => true,
  [fetchTransactions.fulfilled]: () => false,
  [fetchTransactions.rejected]: () => false,
  [addTransaction.pending]: () => true,
  [addTransaction.fulfilled]: () => false,
  [addTransaction.rejected]: () => false,
  [getTransactionDate.pending]: () => true,
  [getTransactionDate.fulfilled]: () => false,
  [getTransactionDate.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchTransactions.rejected]: (_, { payload }) => payload,
  [fetchTransactions.pending]: () => null,
  [addTransaction.rejected]: (_, { payload }) => payload,
  [addTransaction.pending]: () => null,
  [getTransactionDate.rejected]: (_, { payload }) => payload,
  [getTransactionDate.pending]: (_, { payload }) => null,
});

export default combineReducers({
  // categories,
  stats,
  categoriesList,
  items,
  isLoading,
  error,
});
