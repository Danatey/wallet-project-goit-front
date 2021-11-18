import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Balance from "../../components/Balance";
import Currency from "../../components/Currency/Currency";
import "./Dashboard.scss";

const DashboardPage = () => {
  return (
    <>
      <Header name="Имя" />
      <main className="Dashboard__wrap">
        <aside>
          <Navigation />
          <Balance />
          <Currency />
        </aside>
        <article>
          <Outlet />
        </article>
      </main>
    </>
  );
};

export default DashboardPage;
