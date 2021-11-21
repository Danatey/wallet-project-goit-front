import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import "./Balance.scss";

// import { getCurrentUser } from "../../redux/auth/auth-operations";
import { authSelectors, authOperations } from "../../redux/auth";

const Balance = () => {
  // const balance = useSelector((state) => state.auth.user?.balance);
  const balance = useSelector(authSelectors.getBalance);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <div className="balance_container">
      <p className="balance_title">ВАШ БАЛАНС</p>
      <p className="balance_result">&#8372; {balance}</p>
    </div>
  );
};

export default Balance;
