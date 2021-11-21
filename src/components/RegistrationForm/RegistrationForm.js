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
      .email("Enter a valid email")
      .required("Email is required!"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .max(12, "Password should be of maximum 12 characters length")
      .required("Password is required!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords are not the same")
      .required("Password confirmation is required!"),
    name: Yup.string()
      .typeError()
      .min(1, "Name should be of minimum 1 character length")
      .max(12, "Name should be of maximum 12 characters length")
      .required("Name is required!"),
  });

  const handleRegister = (evt) => {
    // evt.preventDefault();

    dispatch(authOperations.register({ name, email, password }));
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
              placeholder="Password"
              className="input"
            />

            <MyTextInput
              label={<LockIcon width={16} height={21} />}
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
              placeholder="Confirm password"
              className="input"
            />

            <MyTextInput
              label={<NameIcon width={18} height={18} />}
              type="text"
              name="name"
              onChange={handleChange}
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
