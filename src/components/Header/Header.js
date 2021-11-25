import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import Logo from "../Logo";
import { authOperations } from "../../redux/auth";
import sprite from "../../images/svg/symbol-defs.svg";
import UserInfo from "../UserInfo";
import "./Header.scss";

Modal.setAppElement("#root");

const Header = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  const dispatch = useDispatch();

  const logOut = (e) => {
    dispatch(authOperations.logOut());
  };
  return (
    <header className="Header">
      <Link to="/home" className="Header__link">
        <Logo />
        <h1 className="Header__logo--text">Wallet</h1>
      </Link>
      <div className="Header__logout">
        <UserInfo />
        <button type="button" className="Header__button" onClick={openModal}>
          <svg className="Header__button--icon" width="18px" height="18px">
            <use href={`${sprite}#icon-logout`}></use>
          </svg>
          <span className="Header__logout-text">Выйти</span>
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Logout Modal"
        overlayClassName="Header-modal__overlay"
        className="Header-modal__container"
      >
        <h1 className="Header-modal__title">
          Вы действительно хотите выйти из приложения?
        </h1>
        <div className="Header-modal__btn-wrap">
          <button
            type="button"
            className="Header-modal__button"
            onClick={logOut}
          >
            Да
          </button>
          <button
            type="button"
            className="Header-modal__button"
            onClick={closeModal}
          >
            Нет
          </button>
        </div>
      </Modal>
    </header>
  );
};

export default Header;
