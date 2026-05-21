import { Fragment } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function ProductPageLayout({ children }) {
  return (
    <Fragment>
      <Header />
      <main className="px-6 md:px-8 lg:px-12  pt-20">{children}</main>
      <Footer />
    </Fragment>
  );
}
export default ProductPageLayout;
