import { Navigate, Outlet } from "react-router-dom";
import { authSelectors } from "../../redux/auth";
import { useSelector } from "react-redux";

const PrivateOutlet = () => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateOutlet;
