import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";
import Balance from "../../components/Balance";
import Currency from "../../components/Currency/Currency";

const DashboardPage = () => {
  return (
    <>
      <Header />
      <main>
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
