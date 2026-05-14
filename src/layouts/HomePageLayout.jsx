import Footer from "./Footer";
import Header from "./Header";

export default function HomePagePageLayout({ children }) {
  return (
    <>
      <Header />
      <main className="pt-26">{children}</main>
      <Footer />
    </>
  );
}
