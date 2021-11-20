import React from "react";
import RegistrationForm from "../../components/RegistrationForm";
import "./RegistrationPage.scss";

const RegistrationPage = () => {
  return (
    <div>
      <div className="page_wrapper">
        <p className="page_text">Finance App</p>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegistrationPage;
