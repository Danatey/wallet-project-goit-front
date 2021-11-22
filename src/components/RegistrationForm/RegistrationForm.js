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

  const validationsSchema = Yup.object({
    email: Yup.string()
      .email("Введите корректный e-mail")
      .required("Обязательное поле для заполнения!"),
    password: Yup.string()
      .min(6, "Пароль должен состоять минимум из 6 символов")
      .max(12, "Пароль должен состоять максимум из 12 символов")
      .required("Обязательное поле для заполнения!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Пароли не совпадают")
      .required("Требуется подтверждение пароля!"),
    name: Yup.string()
      .typeError()
      .min(1, "Имя должно состоять минимум из 1 символа")
      .max(12, "Имя должно состоять максимум из 12 символов")
      .required("Обязательное поле для заполнения!"),
  });

  const handleRegister = ({ name, email, password }) => {
    // evt.preventDefault();

    dispatch(authOperations.register({ name, email, password }));
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
      }}
      validateOnBlur
      onSubmit={handleRegister}
      validationSchema={validationsSchema}
    >
      {({ handleChange, handleBlur, values, isValid, dirty }) => (
        <Form className="form-register ">
          <div className="logo_reg_wrapper">
            <Logo />
            <h1 className="Header__logo--text">Wallet</h1>
          </div>

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
