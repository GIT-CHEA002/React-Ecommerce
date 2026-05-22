import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { BiHeart } from "react-icons/bi";
import { NavLink } from "react-router";

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
      <div className="sticky top-0 left-0 z-30  w-full bg-white">
        <div className="pb-6 block space-y-3 md:space-y-0 md:flex items-center justify-between">
          <div>
            <h1 className="text-blue-900 text-lg md:text-3xl font-semibold">
              Curated Collection
            </h1>
            <p className="text-gray-600 text-sm">
              Discover items tailored to your refined taste.
            </p>
          </div>
          <div className="flex space-x-3 items-center">
            <label htmlFor="sort-option" className="text-nowrap">
              Sort by:
            </label>
            <div className="relative w-fit min-w-[160px]">
              <select
                name="sort-option"
                id="sort-option"
                className="w-full bg-white text-gray-700 text-sm font-medium  px-4 py-2.5 pr-10 border border-gray-300 rounded-lg shadow-sm cursor-pointer outline-none appearance-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-all duration-200"
              >
                <option value="recommend">Recommend</option>
                <option value="feature">Feature</option>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
              </select>
              {/* Custom Chevron Arrow */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                <ChevronDown className=" align-middle" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-5 snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-5">
        {productToDisplay &&
          productToDisplay.map((product, index) => {
            if (index < minIndex || index >= maxIndex) return null;
            return (
              <div
                key={product.id}
                className="h-[380px]  min-w-[250px] snap-start group bg-blue-50 rounded-lg overflow-hidden cursor-pointer shadow-lg shadow-blue-50"
              >
                {/* image  */}

                <div className="h-[220px] w-full py-8 px-10 border-b">
                  <img
                    src={product.images[0]}
                    alt=""
                    className=" h-full w-full object-cover hover:scale-[1.02] transition-all duration-300  "
                  />
                </div>
                <div className=" h-[160px] p-3 flex flex-col justify-between ">
                  <div className="flex justify-between space-x-5">
                    {/* product title */}
                    <h1 className="font-medium text-wrap line-clamp-2 leading-tight">
                      {product.title}
                    </h1>
                    <span className="text-blue-900">${product.price}</span>
                  </div>
                  <p className=" text-gray-600 font-light line-clamp-2 leading-tight">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center space-x-5 ">
                    <NavLink
                      to={`/product/${product.id}`}
                      className="flex-1 text-center text-sm text-blue-900 bg-blue-200 p-2 rounded-lg"
                    >
                      View Details
                    </NavLink>
                    <button className="bg-gray-200 px-2 py-3 rounded-lg">
                      <BiHeart className="text-blue-900 text-lg" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {/* pagination button */}
      {totalPages >= 1 && (
        <div className="sticky flex items-center justify-center pt-5 bottom-0 bg-white  left-0  z-30 ">
          <div className="flex justify-center items-center space-x-6  text-blue-900 font-medium">
            <button
              onClick={() => setCurrentPage((p) => p - 1)}
              disabled={currentPage === 1}
              className="flex items-center space-x-1 disabled:opacity-30"
            >
              <ChevronLeft size={16} /> <span>Prev</span>
            </button>
            <span className="text-gray-500 text-sm">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => p + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center space-x-1 disabled:opacity-30"
            >
              <span>Next</span> <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
