// src/layouts/AuthLayout.jsx

import { Fragment } from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import { Helmet } from "react-helmet-async";

export default function AuthLayout() {
  return (
    <Fragment>
      <Helmet>
        <title>Authentication</title>
        <link
          rel="icon"
          type="image/svg+xml,png"
          href="/icons/autenticationpage.png"
        />
      </Helmet>
      <Header />
      <main className=" px-6 md:px-8 lg:px-12 pt-20">
        <div className="flex items-center justify-center h-full py-12 ">
          <Outlet />
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}
