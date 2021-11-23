import React from "react";

import "./NoTransaction.scss";

const NoTransaction = () => {
  return (
    <div className="no-transaction-container">
      <span className="no-transaction-message">Транзакций не найдено</span>
    </div>
  );
};

export default NoTransaction;
