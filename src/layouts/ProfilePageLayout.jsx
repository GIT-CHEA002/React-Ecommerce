import { Fragment } from "react";
import Footer from "../components/Footer";

export default function ProfilePageLayout({ children }) {
  return (
    <Fragment>
      <main>{children}</main>
      <Footer />
    </Fragment>
  );
}
