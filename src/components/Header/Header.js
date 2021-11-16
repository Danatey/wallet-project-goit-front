import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Logo from "../Logo";
import logout from "../../images/svg/logout.svg";
import "./Header.scss";

const Header = ({ name }) => {
  return (
    <header className="Header">
      <div className="Header__logo">
        <Logo />
        <span className="Header__logo-text">Wallet</span>
      </div>
      <div className="Header__logout">
        <span className="Header__username">{name}</span>
        <Link to="/logout" className="Header__link">
          <img src={logout} width="18" height="18" alt="logout" />
          <span className="Header__logout-text">Выйти</span>
        </Link>
      </div>
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Header;
