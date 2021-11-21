import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../Logo";
import { authSelectors } from "../../redux/auth";
import sprite from "../../images/svg/symbol-defs.svg";
import UserInfo from "../UserInfo";
import "./Header.scss";

import { useDispatch } from "react-redux";
import * as authOperations from "../../redux/auth/auth-operations";

const Header = () => {
  const userName = useSelector(authSelectors.getUserName);

  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();

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
        <span className="Header__username">{userName}</span>
        <button type="button" className="Header__button" onClick={handleClick}>
          <svg className="Header__button--icon" width="18px" height="18px">
            <use href={`${sprite}#icon-logout`}></use>
          </svg>
          <span className="Header__logout-text">Выйти</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
