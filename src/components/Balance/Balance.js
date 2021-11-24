import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import { transactionsSelectors } from "../../redux/transactions";
import "./Balance.scss";

const Balance = () => {
  const dispatch = useDispatch();
  const balance = useSelector(authSelectors.getBalance);
  const transactions = useSelector(transactionsSelectors.getTransactions);

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch, transactions]);

  return (
    <div className="balance_container">
      <p className="balance_title">ВАШ БАЛАНС</p>
      <p className="balance_result">&#8372; {balance}</p>
    </div>
  );
};

export default Balance;
