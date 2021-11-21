import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { authOperations } from "../../redux/auth";
import GoogleAuthButton from "./GoogleAuthButton";

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
