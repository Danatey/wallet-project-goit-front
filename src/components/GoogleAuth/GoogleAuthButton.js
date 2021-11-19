import { ReactComponent as GoogleIcon } from "../../images/googleSVG/google.svg";
import "./GoogleAuth.scss";

const GoogleAuthButton = ({ onClick, disabled }) => (
  <button className="button_google" onClick={onClick} disabled={disabled}>
    <GoogleIcon className="googleSvg" />
    Google
  </button>
);

export default GoogleAuthButton;

// ReactDOM.render(
//   <GoogleLogin
//     clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
//     render={renderProps => (
//       <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
//     )}
//     buttonText="Login"
//     onSuccess={responseGoogle}
//     onFailure={responseGoogle}
//     cookiePolicy={'single_host_origin'}
//   />,
//   document.getElementById('googleButton')
// );
