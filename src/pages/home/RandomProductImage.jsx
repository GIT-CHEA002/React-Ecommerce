import { useMemo } from "react";
import LeadingTitle from "../../components/LeadingTitle";
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
export default function RandomProductImage({ products }) {
  const pattern = useMemo(() => {
    const index = Math.floor(Math.random() * patterns.length);
    return patterns[index];
  }, []);
  const randomProducts = useMemo(() => {
    const suffled = [...products].sort(() => 0.5 - Math.random());
    return suffled.slice(0, 4);
  }, [products]);
  return (
    <div className=" mt-10 px-6 md:px-8 lg:px-12 h-screen">
      <LeadingTitle title={"Shop by Category"} />
      <p className="text-gray-600 ">Find Exactly what you are looking for.</p>
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
  );
}
