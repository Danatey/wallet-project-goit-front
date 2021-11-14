import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { addTransaction } from ''
import Modal from 'react-modal'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { creditTransaction, debetTransaction } from './transactionType'
import './modalTransaction.scss'
import { format } from 'date-fns'

Modal.setAppElement('#root')

export function ModalTransaction() {
  const [transaction, setTransaction] = useState({
    date: new Date(),
    type: false,
    amount: '',
    comment: '',
  })

  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  const handleInputChange = (event) => {
    const name = event.target.name
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value
    updateTransaction(name, value)
  }

  const updateTransaction = (name, value) => {
    setTransaction((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log({
      ...transaction,
      type: transaction.type ? 'Расход' : 'Доход',
      date: format(transaction.date, 'yyyy-MM-dd'),
    })

    // dispatch(addTransaction(...transaction))
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        overlayClassName="modal-overlay"
        contentLabel="Example Modal"
        className="modal-container"
      >
        <h2 className="Modal-title">Добавить транзакцию</h2>

        <div className="checkBox">
          <p className="checkBox-option">Доход</p>
          <input
            type="checkbox"
            name="type"
            onChange={handleInputChange}
            checked={transaction.type}
          />
          <p className="checkBox-option">Расход</p>
        </div>

        <form id="transaction-form" onSubmit={handleSubmit}>
          <Select
            options={transaction.type ? creditTransaction : debetTransaction}
            placeholder="выберите категорию"
            onChange={(option) => {
              updateTransaction('category', option.value)
            }}
            required
          />

          <div className="money-date-container">
            <label className="moneyInput">
              <input
                type="text"
                placeholder="0,00"
                name="amount"
                value={transaction.amount}
                onChange={(e) => {
                  if (
                    e.target.value === '' ||
                    /^[0-9]*(\.[0-9]?[0-9]?)?$/.test(e.target.value)
                  ) {
                    handleInputChange(e)
                  }
                }}
                required
              />
            </label>

            <DatePicker
              selected={transaction.date}
              onChange={(date) => {
                updateTransaction('date', date)
              }}
              dateFormat="yyyy-MM-dd"
            />
          </div>

          <label>
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
        <button type="submit" form="transaction-form" className="btn-add">
          добавить
        </button>
        <button className="btn-exit" onClick={closeModal}>
          отмена
        </button>
      </Modal>
    </div>
  )
}
