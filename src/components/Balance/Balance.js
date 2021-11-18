import React from "react";
import "./Balance.scss";
// import { transactionSelector } from "../..";

const Balance = () => {
  // TODO getLastTransaction
  //   const getLastResult = transactionSelector.getLastTransaction;

  return (
    <div className="balance_container">
      <p className="balance_title">ВАШ БАЛАНС</p>
      <p className="balance_result">&#8372; БАЛАНС</p>
    </div>
  );
};

export default Balance;
