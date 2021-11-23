import { ReactComponent as GoogleIcon } from "../../images/googleSVG/google.svg";
// import "./GoogleAuth.scss";

const GoogleAuthButton = ({ onClick, disabled }) => (
  <button className="button_google" onClick={onClick} disabled={disabled}>
    <GoogleIcon className="googleSvg" />
    Google
  </button>
);

export default GoogleAuthButton;
