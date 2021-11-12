import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <NavLink to="/home">Главная</NavLink>
      <NavLink to="/diagram">Статистика</NavLink>
    </nav>
  );
};

export default Navigation;
