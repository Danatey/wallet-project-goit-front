import React, { useState } from "react";
// import { useDispatch } from 'react-redux'
// import { addTransaction } from ''
import Modal from "react-modal";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { creditTransaction, debetTransaction } from "./transactionType";
import "./modalTransaction.scss";
import { format } from "date-fns";

Modal.setAppElement("#root");

const defaultState = {
  date: new Date(),
  type: false,
  amount: "",
  comment: "",
  category: "",
};

function ModalAddTransaction() {
  const [transaction, setTransaction] = useState(defaultState);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setTransaction(defaultState);
    setIsOpen(false);
  }

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    updateTransaction(name, value);
    if (event.target.type === "checkbox") {
      updateTransaction("category", "");
    }
  };

  const updateTransaction = (name, value) => {
    setTransaction((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      ...transaction,
      type: transaction.type ? "Расход" : "Доход",
      date: format(transaction.date, "yyyy-MM-dd"),
    });

    // dispatch(addTransaction(...transaction))
  };

  return (
    <div>
      <button className="btn-open" onClick={openModal}>
        Open Modal
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="modal-overlay"
        contentLabel="Example Modal"
        className="modal-container"
      >
        <h2 className="Modal-title">Добавить транзакцию</h2>

        <div className="checkBox">
          <p
            className={`checkBox-option ${
              !transaction.type ? "activGreen" : ""
            }`}
          >
            Доход
          </p>
          <label className="switch">
            <input
              className="switch"
              type="checkbox"
              name="type"
              onChange={handleInputChange}
              checked={transaction.type}
            />
            <div className="back">
              <div className="indicator" />
            </div>
            {/* {value ? checkedLabel ?? label : label} */}
          </label>
          <p
            className={`checkBox-option ${transaction.type ? "activPink" : ""}`}
          >
            Расход
          </p>
        </div>

        <form id="transaction-form" onSubmit={handleSubmit}>
          <div className="input-select-container">
            <Select
              options={transaction.type ? creditTransaction : debetTransaction}
              placeholder="выберите категорию"
              onChange={(option) => {
                updateTransaction("category", option.value);
              }}
            />
            <input
              tabIndex={-1}
              className="requiredHackInput"
              type="text"
              required
              onChange={() => ({})}
              value={transaction.category}
            />
          </div>

          <div className="money-date-container">
            <label>
              <input
                className="moneyInput"
                type="text"
                placeholder="0.00"
                name="amount"
                value={transaction.amount}
                onChange={(e) => {
                  if (
                    e.target.value === "" ||
                    /^[0-9]*(\.[0-9]?[0-9]?)?$/.test(e.target.value)
                  ) {
                    handleInputChange(e);
                  }
                }}
                required
              />
            </label>

            <DatePicker
              className="moneyInput"
              selected={transaction.date}
              onChange={(date) => {
                updateTransaction("date", date);
              }}
              dateFormat="dd.MM.yyyy"
            />
          </div>

          <label className="lable">
            <input
              type="text"
              placeholder="Комментарий"
              className="descriptionInput"
              name="comment"
              value={transaction.comment}
              onChange={handleInputChange}
              required
            />
          </label>
        </form>
        <button type="submit" form="transaction-form" className="btn btn-add">
          <span className="btn-text">добавить</span>
        </button>
        <button className="btn btn-exit" onClick={closeModal}>
          <span className="btn-text">отмена</span>
        </button>
      </Modal>
    </div>
  );
}

export default ModalAddTransaction;
