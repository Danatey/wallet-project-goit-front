import React from "react";
import "./Balance.scss";
// import { transactionSelector } from "../..";

const Balance = () => {
  // TODO getLastTransaction
  //   const getLastResult = transactionSelector.getLastTransaction;

  return (
    <div className="container">
      <p className="title">ВАШ БАЛАНС</p>
      <p className="balance">&#8372; getLastResult || 0.0</p>
    </div>
  );
};

export default Balance;
