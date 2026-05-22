import { Fragment } from "react";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import SearchForm from "../components/SearchForm";
import { Helmet } from "react-helmet-async";

export default function HomePagePageLayout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>Home</title>
        <link rel="icon" type="image/svg+xml,png" href="/icons/homepage.png" />
      </Helmet>
      <Header />
      <main className="pt-26">{children}</main>
      <div className="">
        <SearchForm />
        <Footer />
      </div>
    </Fragment>
  );
}
