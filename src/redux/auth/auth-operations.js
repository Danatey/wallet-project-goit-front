import axios from "axios";

axios.defaults.baseURL = "";

const token = {};

const register = (credentials) => async (dispatch) => {};

const logIn = (credentials) => async (dispatch) => {};

const logOut = (onSuccess) => async (dispatch) => {};

const getCurrentUser = () => async (dispatch, getState) => {};

// eslint-disable-next-line
export default {
  register,
  logIn,
  logOut,
  getCurrentUser,
};
