import { Fragment } from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <main className="container mx-auto">
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
