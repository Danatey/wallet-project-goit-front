import { React } from "react";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { authOperations } from "../../redux/auth";
import { NavLink } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { GoogleLogin } from "react-google-login";

import { BACK_END } from "../../assets/API/BACK_END";

import MyTextInput from "../MyTextInput";
import MainButton from "../MainButton";
import Logo from "../Logo";
import Loader from "../Loader";
import { ReactComponent as EmailIcon } from "../../icons/email.svg";
import { ReactComponent as LockIcon } from "../../icons/lock.svg";
import { ReactComponent as GoogleIcon } from "../../images/googleSVG/google.svg";

import "./LoginForm.scss";
import "../MainButton/MainButton.scss";
import "./GoogleAuth.scss";

function LoginForm() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

  const validationsSchema = Yup.object().shape({
    email: Yup.string("Введите e-mail")
      .email("Введите корректный e-mail")
      .required("Обязательное поле для заполнения!"),
    password: Yup.string("Ввведите пароль")
      .min(6, "Пароль должен состоять минимум из 6 символов")
      .max(14, "Пароль должен состоять максимум из 14 символов")
      .required("Обязательное поле для заполнения!"),
  });

  const handleLogin = ({ email, password }) => {
    // evt.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
  };

  const responseGoogle = async (googleData) => {
    const res = await fetch(`${BACK_END}/api/users/login`, {
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
      {loading ? (
        <Loader />
      ) : (
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

                {loginData ? (
                  <div>
                    <h3 className="loggedIn">
                      You logged in as {loginData.email}
                    </h3>
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
      )}
    </>
  );
}

export default LoginForm;
