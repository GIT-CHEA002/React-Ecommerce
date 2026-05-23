import ProductGridPagination from "./ProductGridPagination";
import ProductGridItem from "./ProductGridItem";
import ProductGridHeader from "./ProductGridHeader";

export default function ProductGrid({
  scrollContainerRef,
  productToDisplay,
  setCurrentPage,
  currentPage,
}) {
  const totalPages = Math.ceil(productToDisplay.length / 6);
  const minIndex = (currentPage - 1) * 6;
  const maxIndex = currentPage * 6;
  return (
    <div
      ref={scrollContainerRef}
      className="flex-1 relative h-screen  z-20 md:ps-12 mt-12 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
    >
      {/* header top sort option  */}
      <ProductGridHeader />
      <ProductGridItem
        productToDisplay={productToDisplay}
        minIndex={minIndex}
        maxIndex={maxIndex}
      />
      <ProductGridPagination
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}
