import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../Logo";
import { authSelectors } from "../../redux/auth";
import logout from "../../images/svg/symbol-defs.svg";
import "./Header.scss";

const Header = () => {
  const userName = useSelector(authSelectors.getUserName);
  return (
    <header className="Header">
      <Link to="/home" className="Header__link">
        <Logo />
        <h1 className="Header__logo--text">Wallet</h1>
      </Link>
      <div className="Header__logout">
        <span className="Header__username">{userName}</span>
        <button type="button" className="Header__button">
          <svg className="Header__button--icon" width="18px" height="18px">
            <use href={`${logout}#icon-logout`}></use>
          </svg>
          <span className="Header__logout-text">Выйти</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
