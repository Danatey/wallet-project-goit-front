import axios from "axios";
import authActions from "./auth-actions";

axios.defaults.baseURL = ""; //Подставить нужный URL

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (credentials) => async (dispatch) => {
  dispatch(authActions.registerRequest());
  try {
    const response = await axios.post("/signup", credentials);

    token.set(response.data.token);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};

const logIn = (credentials) => async (dispatch) => {
  dispatch(authActions.loginRequest());
  try {
    const response = await axios.post("/login", credentials);

    token.set(response.data.token);
    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

const logOut = (onSuccess) => async (dispatch) => {};

const getCurrentUser = () => async (dispatch, getState) => {};

// eslint-disable-next-line
export default {
  register,
  logIn,
  logOut,
  getCurrentUser,
};
