// src/layouts/AuthLayout.jsx

import { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <Fragment>
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
