import { React } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import MyTextInput from "../MyTextInput";
import MainButton from "../MainButton";
import GoogleAuth from "../GoogleAuth";
import { NavLink } from "react-router-dom";
import Logo from "../Logo";
import { ReactComponent as EmailIcon } from "../../icons/email.svg";
import { ReactComponent as LockIcon } from "../../icons/lock.svg";
// import Loader from '../Loader';
// import { useState } from "react";

import "./LoginForm.scss";
import "../MainButton/MainButton.scss";

function LoginForm() {
  const dispatch = useDispatch();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const validationsSchema = Yup.object().shape({
    email: Yup.string("Введите e-mail")
      .email("Введите корректный e-mail")
      .required("Обязательное поле для заполнения!"),
    password: Yup.string("Ввведите пароль")
      .min(6, "Пароль должен состоять минимум из 6 символов")
      .max(12, "Пароль должен состоять максимум из 12 символов")
      .required("Обязательное поле для заполнения!"),
  });

  const handleLogin = ({ email, password }) => {
    // evt.preventDefault();

    dispatch(authOperations.logIn({ email, password }));
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validateOnBlur
      onSubmit={handleLogin}
      validationSchema={validationsSchema}
    >
      {({ handleChange, handleBlur, values, isValid, dirty }) => (
        <Form className="form">
          <div className="logo_wrapper">
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
            />
          </div>

          <div className="button_container">
            <MainButton
              type="submit"
              text="Вход"
              disabled={!isValid && !dirty}
              className="logo_btn"
              disable="sd"
            />

            <div>
              <NavLink to="/register" className="main_btn">
                Регистрация
              </NavLink>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
