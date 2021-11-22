import React from "react";
import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";
import "./Balance.scss";

const Balance = () => {
  const balance = useSelector(authSelectors.getBalance);

  return (
    <div className="balance_container">
      <p className="balance_title">ВАШ БАЛАНС</p>
      <p className="balance_result">&#8372; {balance}</p>
    </div>
  );
};

export default Balance;
