import React from "react";
import style from "./Balance.scss";
import { transactionSelector } from "../../redux/transactions";

const Balance = () => {
  // TODO getLastTransaction
  const getLastResult = transactionSelector;

  return (
    <div className={style.container}>
      <p className={style.title}>ВАШ БАЛАНС</p>
      <p className={style.balance}>&#8372;{getLastResult?.balance || 0.0}</p>
    </div>
  );
};

export default Balance;
