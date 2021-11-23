export const getIsAuthenticated = (state) => state.auth.isAuthenticated;
export const getUserName = (state) => state.auth.user.name;
export const getBalance = (state) => state.auth.user.balance;
export const getUser = (state) => state.auth.user;
export const getError = (state) => state.auth.error;
