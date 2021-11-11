import { BACK_END } from "../BACK_END";

function fetchTransaction() {
  return fetch(`${BACK_END}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch(console.log("Error fetchTransaction"));
}

function postIncrementTransaction(idCategory, value, date, comments) {
  return fetch(`${BACK_END}`, {
    method: "POST",
    body: JSON.stringify({ idCategory, value, date, comments }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch(console.log("Error postIncrementTransaction"));
}

function postDecrementTransaction(idCategory, value, date, comments) {
  return fetch(`${BACK_END}`, {
    method: "POST",
    body: JSON.stringify({ idCategory, value, date, comments }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch(console.log("Error postDecrementTransaction"));
}

export { fetchTransaction, postIncrementTransaction, postDecrementTransaction };
