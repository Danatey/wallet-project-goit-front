import { React } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { GoogleLogin } from "react-google-login";

import PasswordStrenght from "./PasswordStrength";
import MyTextInput from "../MyTextInput";
import MainButton from "../MainButton";
import Logo from "../Logo";

import { ReactComponent as EmailIcon } from "../../icons/email.svg";
import { ReactComponent as LockIcon } from "../../icons/lock.svg";
import { ReactComponent as NameIcon } from "../../icons/name.svg";
import { ReactComponent as GoogleIcon } from "../../images/googleSVG/google.svg";

import "./RegistrationForm.scss";
import "../MainButton/MainButton.scss";

function RegistrationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

  const validationsSchema = Yup.object({
    email: Yup.string()
      .email("Введите корректный e-mail")
      .required("Обязательное поле для заполнения!"),
    password: Yup.string()
      .min(6, "Пароль должен состоять минимум из 6 символов")
      .max(14, "Пароль должен состоять максимум из 14 символов")
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
    navigate("/login");
  };

  const responseGoogle = async (googleData) => {
    const res = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    setLoginData(data);
    localStorage.setItem("loginData", JSON.stringify(data));
  };

  return (
    <>
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

              {loginData ? (
                <div>
                  <h3>You logged in as {loginData.email}</h3>
                </div>
              ) : (
                <GoogleLogin
                  clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                  render={(renderProps) => (
                    <button
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      className="button_google"
                    >
                      <GoogleIcon className="googleSvg" />
                      Google
                    </button>
                  )}
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              )}
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
    </>
  );
}

export default RegistrationForm;
