import { React } from "react";
import { NavLink } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyTextInput from "../MyTextInput";
import MainButton from "../MainButton";
import GoogleAuth from "../GoogleAuth";
import Logo from "../Logo";
import { ReactComponent as EmailIcon } from "../../icons/email.svg";
import { ReactComponent as LockIcon } from "../../icons/lock.svg";
import { ReactComponent as NameIcon } from "../../icons/name.svg";
// import Loader from '../Loader';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import "./RegistrationForm.scss";
import "../MainButton/MainButton.scss";

function RegistrationForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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

  const handleRegister = (evt) => {
    // evt.preventDefault();

    dispatch(
      authOperations.register({ name, email, password, confirmPassword })
    );
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
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
              onChange={(e) => setEmail(e.currentTarget.value)}
              onBlur={handleBlur}
              value={values.email}
              placeholder="E-mail"
              className="input"
            />

            <MyTextInput
              label={<LockIcon width={16} height={21} />}
              type="password"
              name="password"
              onChange={(e) => setPassword(e.currentTarget.value)}
              onBlur={handleBlur}
              value={values.password}
              placeholder="Password"
              className="input"
            />

            <MyTextInput
              label={<LockIcon width={16} height={21} />}
              type="password"
              name="confirmPassword"
              onChange={(e) => setConfirmPassword(e.currentTarget.value)}
              onBlur={handleBlur}
              value={values.confirmPassword}
              placeholder="Confirm password"
              className="input"
            />

            <MyTextInput
              label={<NameIcon width={18} height={18} />}
              type="text"
              name="name"
              onChange={(e) => setName(e.currentTarget.value)}
              onBlur={handleBlur}
              value={values.name}
              placeholder="Your name"
              className="input"
            />
          </div>

          <div className="button_container">
            <MainButton
              type="submit"
              text="Регистрация"
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
