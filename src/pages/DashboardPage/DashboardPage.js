import { Outlet } from "react-router";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";

const DashboardPage = () => {
  return (
    <>
      <Header />
      <main>
        <aside>
          <Navigation />
          {/* <Balance />
          <Currency /> */}
        </aside>
        <article>
          <Outlet />
        </article>
      </main>
    </>
  );
};

export default DashboardPage;
