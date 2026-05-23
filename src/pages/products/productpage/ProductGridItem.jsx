import { BiHeart } from "react-icons/bi";
import { NavLink } from "react-router";

export default function ProductGridItem({
  productToDisplay,
  minIndex,
  maxIndex,
}) {
  return (
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
  );
}
