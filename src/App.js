import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Media from "react-media";
import Container from "./components/Container";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import HomeTab from "./components/HomeTab";
import DiagramTab from "./components/DiagramTab";
import PrivateOutlet from "./components/PrivateRoute";
import PublicOutlet from "./components/PublicRoute";
import Currency from "./components/Currency";
import Loader from "./components/Loader";
import { authOperations } from "./redux/auth";
import "./App.scss";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Container>
      <Routes>
        {loading ? (
          <Route path="*" element={<Loader />} />
        ) : (
          <Route path="/" element={<PrivateOutlet />}>
            <Route element={<DashboardPage />}>
              <Route index element={<Navigate to="/home" />} />
              <Route path="home" element={<HomeTab />} />
              <Route path="diagram" element={<DiagramTab />} />
              <Route
                path="currency"
                element={
                  <Media query={{ maxWidth: 767 }}>
                    {(matches) =>
                      matches ? <Currency /> : <Navigate to="/home" />
                    }
                  </Media>
                }
              />
            </Route>
          </Route>
        )}

        <Route path="login" element={<PublicOutlet restricted />}>
          <Route index element={<LoginPage />} />
        </Route>
        <Route path="register" element={<PublicOutlet restricted />}>
          <Route index element={<RegistrationPage />} />
        </Route>
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </Container>
  );
}

export default App;
