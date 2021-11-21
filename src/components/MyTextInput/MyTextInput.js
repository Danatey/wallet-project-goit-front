import { React } from "react";
import { ErrorMessage, useField } from "formik";
import "./MyTextInput.scss";

const MyTextInput = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <>
      <ErrorMessage
        component="div"
        name={field.name}
        style={{ color: "#FF6596" }}
      />
      <label htmlFor={field.name} className="label">
        {label}
        <input {...field} {...props} autoComplete="off" />
      </label>
    </>
  );
};

export default MyTextInput;
