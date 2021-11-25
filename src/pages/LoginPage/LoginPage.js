import React from "react";
import LoginForm from "../../components/LoginForm";
import "./LoginPage.scss";

const LoginPage = () => {
  return (
    <div>
      <div className="page_wrapper">
        <p className="page_text">Finance App</p>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
