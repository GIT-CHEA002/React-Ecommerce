import { Fragment } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchForm from "../components/SearchForm";

export default function HomePagePageLayout({ children }) {
  return (
    <Fragment>
      <Header />
      <main className="pt-26">{children}</main>
      <div className="">
        <SearchForm />
        <Footer />
      </div>
    </Fragment>
  );
}
