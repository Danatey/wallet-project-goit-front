import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";

const PublicOutlet = ({ restricted = false }) => {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  const shouldRedirect = isAuthenticated && restricted;

  return shouldRedirect ? <Navigate to="/home" /> : <Outlet />;
};

PublicOutlet.propTypes = {
  restricted: PropTypes.bool,
};

export default PublicOutlet;
