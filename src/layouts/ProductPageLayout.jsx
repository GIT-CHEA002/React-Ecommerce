import Header from "./Header";

export default function ProductPageLayout({ children }) {
  return (
    <>
      <Header />
      <main className="px-12 pt-20 bg-blue-200 ">{children}</main>
    </>
  );
}
