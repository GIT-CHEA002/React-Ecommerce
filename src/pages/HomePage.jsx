import { useMemo } from "react";
import LeadingTitle from "../components/LeadingTitle";
import NavLinkTab from "../components/shared/NavLinkTab";
import HomePagePageLayout from "../layouts/HomePageLayout";
import { useNavigate } from "react-router";
import { BiHeart } from "react-icons/bi";
import { BiCartAdd } from "react-icons/bi";

const patterns = [
  [
    "col-span-1 row-span-1",
    "col-span-2 row-span-3",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
  ],
  [
    "col-span-2 row-span-3",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
  ],
  [
    "col-span-3 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
  ],
];
export default function HomePage({ products }) {
  const pattern = useMemo(() => {
    const index = Math.floor(Math.random() * patterns.length);
    return patterns[index];
  }, []);
  const randomProducts = useMemo(() => {
    const suffled = [...products].sort(() => 0.5 - Math.random());
    return suffled.slice(0, 4);
  }, [products]);
  const navigator = useNavigate();
  return (
    <>
      <title>Home</title>
      <HomePagePageLayout>
        <div className="px-6 md:px-8 lg:px-12 block md:flex h-screen bg-blue-50 items-center pt-12">
          <div className=" w-full md:w-[50%] space-y-2 py-12 ">
            <h1 className="text-wrap text-4xl tracking-wide text-blue-900 font-medium">
              Elevated Living, Curated for You.
            </h1>
            <p className="text-wrap text-gray-600 pb-5">
              Discover a sanctuary of quality products designed to bring
              serenity and sophistication to your everyday life.
            </p>
            <NavLinkTab
              title={"Explore Collection"}
              widthStyle={"w-auto"}
              path={"/product"}
            />
          </div>
          <div className=" w-full md:w-[50%] h-[280px] rounded-3xl overflow-hidden ">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6f3Z5wv5XMpqH1gcY-629C1qAhOdeecb3x8zNK1ipKorpOLjZhG0yaLufg-SJX3LfjzLxqknlyTAdb_nPn0G7vPa6qshEMg8RwO_Gd_Aq9k_2dgOuGaxDkBOuxMlkTg7haXPpgLh7FF55yzLppDgijFt6r8AGlAvTi3L3KTOEPQ0N2QK3rStf4BnL5FkGdjkLeVZiEolaICOGWW4jYKDoxI-2rGGNZbg2TWABZRiW74iLm-kahGGFlcgJ7bECCFpGYe5LCa9DJhc"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        {/* show random products  */}
        <div className=" mt-10 px-6 md:px-8 lg:px-12 h-screen">
          <LeadingTitle title={"Shop by Category"} />
          <p className="text-gray-600 ">
            Find Exactly what you are looking for.
          </p>
          <div className="grid grid-cols-3 auto-rows-[150px] gap-3 my-4">
            {randomProducts &&
              randomProducts.map((randomProduct, index) => {
                return (
                  <div
                    key={randomProduct.id}
                    className={`overflow-hidden rounded-lg cursor-pointer relative bg-blue-100 ${pattern[index]}`}
                  >
                    <img
                      src={randomProduct.images[0]}
                      alt={`image galery ${randomProduct.id}`}
                      className="w-full h-full hover:scale-[1.02] object-cover transition-all duration-300"
                    />
                    <div className="absolute bottom-1 left-0 px-3 text-gray-600/70 ">
                      <span className="text-sm">{randomProduct.brand}</span>
                      <h1 className=" text-base md:text-lg font-bold">
                        {randomProduct.category}
                      </h1>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* features products  */}
        <div className=" mt-10 px-6 md:px-8 lg:px-12 space-y-5">
          <div className="flex justify-between items-center">
            <LeadingTitle title={"Feature Products"} />
            {/* view all buttons */}
            <button
              type="submit"
              onClick={() => {
                navigator("/product");
              }}
              className="text-blue-900 text-nowrap font-semibold hover:underline underline-offset-2 decoration-clone"
            >
              View all
            </button>
          </div>
          {/* product grids */}
          <div className=" flex overflow-x-auto snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {products &&
              products.map((product) => {
                return (
                  <div
                    onClick={() => {
                      navigator("/product/" + product.id, {
                        state: {
                          products: products,
                        },
                      });
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
                        <h1 className=" font-medium  line-clamp-1">
                          {product.title}
                        </h1>
                      </div>
                      <div className="flex justify-between items-center">
                        {/* product price  */}
                        <span className="font-bold text-blue-900">
                          ${product.price}
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
        </div>
      </HomePagePageLayout>
    </>
  );
}
