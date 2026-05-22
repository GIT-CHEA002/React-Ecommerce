import { Fragment } from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
export default function CheckoutPageLayout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>Checkout</title>
        <link
          rel="icon"
          type="image/svg+xml,png"
          href="/icons/checkoutpage.png"
        />
      </Helmet>

      <Header />
      <main className="px-6 md:px-8 lg:px-12  pt-20">{children}</main>
      <Footer />
    </Fragment>
  );
}
