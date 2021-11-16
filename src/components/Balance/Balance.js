import React from "react";
import "./Balance.scss";
// import { transactionSelector } from "../..";

const Balance = () => {
  // TODO getLastTransaction
  //   const getLastResult = transactionSelector.getLastTransaction;

  return (
    <div class="container">
      <p class="title">ВАШ БАЛАНС</p>
      {/* <p class="balance">&#8372; getLastResult || 0.0</p> */}
      <p class="balance">&#8372; Amount</p>
    </div>
  );
};

export default Balance;
