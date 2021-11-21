import { React } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import MainButton from "../MainButton";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import "./RegistrationForm.scss";
import "../MainButton/MainButton.scss";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (evt) => {
    switch (evt.currentTarget.name) {
      case "name":
        setName(evt.currentTarget.value);
        break;

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

  const handleRegister = (evt) => {
    evt.preventDefault();

    dispatch(authOperations.register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
    navigate("/login");
  };

  return (
    <form onSubmit={handleRegister} className="form" autoComplete="off">
      <div className="container_input">
        <div className="form-field">
          <input
            className="input"
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            value={email}
            placeholder=" "
            title="Введите свою почту."
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

        <div className="form-field">
          <input
            className="input"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            placeholder=" "
            required
            minLength="3"
            onChange={handleChange}
          />
          <label className="label">Ваше имя</label>
        </div>
      </div>

      <div className="button_container">
        <MainButton
          type="submit"
          text="Регистрация"
          className="logo-btn"
          disable="sd"
        />

        <div>
          <NavLink to="/login" className="main-btn">
            Вход
          </NavLink>
        </div>
      </div>
    </form>
  );
}

export default RegistrationForm;
