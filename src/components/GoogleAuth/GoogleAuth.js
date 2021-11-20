import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import GoogleAuthButton from "./GoogleAuthButton";

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

const GoogleAuth = () => {
  const dispatch = useDispatch();

  const successLogin = async ({ tokenId, profileObject }) => {
    const { email, name } = profileObject;
    const newUser = { email, name, tokenId };

    dispatch(authOperations.logIn(newUser));
  };

  return (
    <GoogleLogin
      clientId=""
      render={({ onClick, disabled }) => (
        <GoogleAuthButton onClick={onClick} disabled={disabled} />
      )}
      onSuccess={successLogin}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleAuth;
