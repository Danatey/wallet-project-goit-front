import { React } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import PasswordStrenght from "./PasswordStrength";
import MyTextInput from "../MyTextInput";
import MainButton from "../MainButton";
import GoogleAuth from "../GoogleAuth";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";

import { ReactComponent as EmailIcon } from "../../icons/email.svg";
import { ReactComponent as LockIcon } from "../../icons/lock.svg";
import { ReactComponent as NameIcon } from "../../icons/name.svg";
// import Loader from '../Loader';

import "./RegistrationForm.scss";
import "../MainButton/MainButton.scss";

function RegistrationForm() {
  const dispatch = useDispatch();
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const handleChange = (evt) => {
    switch (evt.currentTarget.name) {
      case "name":
        setName(evt.currentTarget.value);
        break;

  const handleRegister = ({ name, email, password }) => {
    // evt.preventDefault();

    dispatch(authOperations.register({ name, email, password }));
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

            <MyTextInput
              label={<EmailIcon width={20} height={16} />}
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="E-mail"
              className="input"
              id="email"
            />

            <MyTextInput
              label={<LockIcon width={16} height={21} />}
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="Пароль"
              className="input"
              id="password"
              onInput={(e) => setPassword(e.target.value)}
            />

            <MyTextInput
              label={<LockIcon width={16} height={21} />}
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
              placeholder="Подтвердите пароль"
              className="input"
            />

            <PasswordStrenght password={password} />

            <MyTextInput
              label={<NameIcon width={18} height={18} />}
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder="Ваше имя"
              className="input"
              id="name"
            />
          </div>

          <div className="button_container">
            <MainButton
              type="submit"
              text="Регистрация"
              disabled={!isValid && !dirty}
              className="logo_btn"
              disable="sd"
            />

            <div>
              <NavLink to="/login" className="main_btn">
                Вход
              </NavLink>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default RegistrationForm;
