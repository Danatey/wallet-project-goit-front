import { BACK_END } from "../BACK_END";

function signUp(email, password, nameUser) {
  return fetch(`${BACK_END}/signup`, {
    method: "POST",
    body: JSON.stringify({ email, password, nameUser }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch(console.log("Error SignUp"));
}

function logIn(email, password) {
  return fetch(`${BACK_END}/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch(console.log("Error logIn"));
}

function logOut() {
  return fetch(`${BACK_END}/login`, {
    method: "POST",
    body: JSON.stringify(),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch(console.log("Error logOut"));
}

function fetchBalance(userToken) {
  return fetch(`${BACK_END}/${userToken}/current`, {
    method: "GET",
    body: JSON.stringify({ userToken }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch(console.log("Error fetchBalance"));
}

export { signUp, logIn, logOut, fetchBalance };
