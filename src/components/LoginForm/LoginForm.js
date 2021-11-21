import { React } from "react";
import { NavLink } from "react-router-dom";
import MainButton from "../MainButton";
import GoogleAuth from "../GoogleAuth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import "./LoginForm.scss";
import "../MainButton/MainButton.scss";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    switch (evt.currentTarget.name) {
      case "email":
        setEmail(evt.currentTarget.value);
        break;

      case "password":
        setPassword(evt.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const handleLogin = (evt) => {
    evt.preventDefault();

    dispatch(authOperations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleLogin} className="form" autoComplete="off">
      <div className="container_google">
        <p className="text">
          Вы можете авторизоваться с помощью <br />
          Google Account:
        </p>

        <GoogleAuth />
      </div>

      <div className="container_input">
        <p className="text">
          Или зайти с помощью e-mail и пароля, предварительно
          зарегистрировавшись:
        </p>

        <div className="form-field">
          <input
            className="input"
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            value={email}
            placeholder=" "
            title="Введите свою пошту."
            required
            onChange={handleChange}
          />
          <label className="label">E-mail:</label>
        </div>

        <div className="form-field">
          <input
            className="input"
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
            placeholder=" "
            title="Пароль больше 6-ти символов"
            required
            minLength="6"
          />
          <label className="label">Пароль:</label>
        </div>
      </div>

      <div className="button_container">
        <MainButton
          type="submit"
          text="Вход"
          className="logo-btn"
          disable="sd"
        />

        <div>
          <NavLink to="/register" className="main-btn">
            Регистрация
          </NavLink>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
