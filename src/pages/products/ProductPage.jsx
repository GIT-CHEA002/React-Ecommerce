import { List } from "lucide-react";
import { useEffect, useState } from "react";
import ProductPageLayout from "../../layouts/ProductPageLayout";
import { useRef } from "react";
import SideBar from "./Sidebar";
import ProductGrid from "./ProductGrid";
export default function ProductPage({ products }) {
  // share state
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const scrollContainerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productToDisplay = products.filter((product) =>
    selectedCategory === "all" ? true : product.category === selectedCategory,
  );
  // use in side bar but need share state
  const getSelectedCategory = (categoryItem) => {
    setSelectedCategory(categoryItem);
    setCurrentPage(1);
    setSideBarOpen(!sideBarOpen);
  };
  // pagination set up
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      // for entire webpage
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Set to "auto" if you want it to snap instantly without animation
      });
    }
  }, [selectedCategory, currentPage]); // render whenever selectedCategory or currentPage load
  return (
    <>
      <title>Product</title>
      <ProductPageLayout>
        {/* toggle button mobile */}
        <button
          className="fixed top-60 px-5 left-0 z-50 md:hidden block bg-white p-2 rounded-e shadow-md border border-gray-200 hover:bg-gray-50 transition-colors"
          onClick={() => {
            setSideBarOpen(!sideBarOpen);
          }}
          aria-label="toggle-sidebar"
        >
          <List />
        </button>
        <div className="flex">
          {/* side bar */}
          <SideBar
            sideBarOpen={sideBarOpen}
            selectedCategory={selectedCategory}
            getSelectedCategory={getSelectedCategory}
          />
          {/* scroll able right side */}
          <ProductGrid
            scrollContainerRef={scrollContainerRef}
            productToDisplay={productToDisplay}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </ProductPageLayout>
    </>
  );
}
