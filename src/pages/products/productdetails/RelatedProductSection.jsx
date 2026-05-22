import { BiCartAdd, BiHeart } from "react-icons/bi";
import LeadingTitle from "../../../components/LeadingTitle";
import { useNavigate } from "react-router";
export default function RelatedProductSection({ categoryProduct }) {
  const navigator = useNavigate();
  return (
    <section className="">
      <LeadingTitle title={"Related Product by Category"} />
      <h1 className="text-gray-600 text-base mb-4">
        Curated items that implement your style
      </h1>
      <div className=" flex overflow-x-auto snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {categoryProduct &&
          categoryProduct.map((product) => {
            return (
              <div
                onClick={() => {
                  navigator("/product/" + product.id);
                }}
                key={product.id}
                className="h-[370px] relative min-w-[250px] snap-start flex-shrink-0 group bg-blue-50 rounded-lg overflow-hidden cursor-pointer shadow-lg shadow-blue-50"
              >
                {/* image */}
                <img
                  src={product.images[0]}
                  alt=""
                  className=" h-[250px] w-full object-cover hover:scale-[1.02] transition-all duration-300  "
                />
                <div className=" h-[120px] p-3 flex flex-col justify-between ">
                  <div className="block">
                    {/* category */}
                    <span className=" text-gray-600 font-medium">
                      {product.category}
                    </span>
                    {/* product title */}
                    <h1 className=" font-medium text-wrap">{product.title}</h1>
                  </div>
                  <div className="flex justify-between items-center">
                    {/* product price  */}
                    <span className="font-bold text-blue-900">
                      {`$ ${product.price}`}
                    </span>
                    {/* add to cart buttons */}
                    <button className="bg-blue-100 p-2 rounded-lg">
                      <BiCartAdd className="text-blue-900 text-lg" />
                    </button>
                  </div>
                </div>
                {/* add to  wishlist button  */}
                <div className="absolute opacity-0 group-hover:opacity-100 top-2 right-2 text-end transition-all duration-300 ">
                  <button className="bg-blue-100 py-2 px-1 rounded-xl">
                    <BiHeart className="text-blue-900 text-lg" />
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
