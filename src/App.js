import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Container from "./components/Container";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import HomeTab from "./components/HomeTab";
import DiagramTab from "./components/DiagramTab";
import PrivateOutlet from "./components/PrivateRoute";
import PublicOutlet from "./components/PublicRoute";
import { authOperations } from "./redux/auth";
import Loader from "./components/Loader";
import "./common/main.scss";

import "./App.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Routes>
        {/* це приватний раут, поки що залишаю відкритим, щоб зручно було кодить, коли буде працювати логін, тоді розкоментую */}
        {/* <Route path="/" element={<PrivateOutlet />}>
          <Route element={<DashboardPage />}>
            <Route index element={<Navigate to="/home" />} />
            <Route path="home" element={<HomeTab />} />
            <Route path="diagram" element={<DiagramTab />} />
          </Route>
        </Route> */}
        {/* тимчасово звичайний раут, не приватний */}
        <Route path="/" element={<DashboardPage />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomeTab />} />
          <Route path="diagram" element={<DiagramTab />} />
        </Route>
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
