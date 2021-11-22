import React from "react";

import "./NoTransaction.scss";

const NoTransaction = () => {
  return (
    <div className="no-transaction-container">
      <span className="no-transaction-message">
        You have no transactions yet
      </span>
    </div>
  );
};

export default NoTransaction;
