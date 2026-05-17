import Footer from "./Footer";
import Header from "./Header";

export default function ProductPageLayout({ children }) {
  return (
    <>
      <Header />
      <main className="px-6 md:px-8 lg:px-12  pt-20">
        {children}
      </main>
      <Footer />
    </>
  );
}
