import Button from "../components/Button";
import LeadingTitle from "../components/LeadingTitle";
import SectionWrapper from "../components/SectionWrapper";
import HomePagePageLayout from "../layouts/HomePageLayout";
import { BiHeart } from "react-icons/bi";
import { BiCartAdd } from "react-icons/bi";

const images = [
  "https://picsum.photos/600/800?1",
  "https://picsum.photos/600/400?2",
  "https://picsum.photos/500/500?3",
  "https://picsum.photos/700/900?4",
];
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

export default function HomePage() {
  const pattern = patterns[Math.floor(Math.random() * patterns.length)];
  return (
    <>
      <title>Home</title>
      <HomePagePageLayout>
        <div className="px-12 block md:flex h-screen bg-blue-50 items-center pt-5">
          <div className=" w-full md:w-[50%] space-y-2 py-12 ">
            <h1 className="text-wrap text-4xl tracking-wide text-blue-900 font-medium">
              Elevated Living, Curated for You.
            </h1>
            <p className="text-wrap text-gray-600">
              Discover a sanctuary of quality products designed to bring
              serenity and sophistication to your everyday life.
            </p>
            <Button title={"Explore Collection"} />
          </div>
          <div className=" w-full md:w-[50%] h-[280px] rounded-3xl overflow-hidden ">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6f3Z5wv5XMpqH1gcY-629C1qAhOdeecb3x8zNK1ipKorpOLjZhG0yaLufg-SJX3LfjzLxqknlyTAdb_nPn0G7vPa6qshEMg8RwO_Gd_Aq9k_2dgOuGaxDkBOuxMlkTg7haXPpgLh7FF55yzLppDgijFt6r8AGlAvTi3L3KTOEPQ0N2QK3rStf4BnL5FkGdjkLeVZiEolaICOGWW4jYKDoxI-2rGGNZbg2TWABZRiW74iLm-kahGGFlcgJ7bECCFpGYe5LCa9DJhc"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        {/* category products  */}
        <SectionWrapper>
          <div className="px-12 h-screen">
            <LeadingTitle title={"Shop by Category"} />
            <p className="text-gray-600 ">
              Find Exactly what you are looking for.
            </p>
            <div className="grid grid-cols-3 auto-rows-[150px] gap-3 my-4">
              {images.map((image, index) => {
                return (
                  <>
                    <div
                      key={index}
                      className={`overflow-hidden rounded-lg relative bg-blue-100 ${pattern[index]}`}
                    >
                      <img
                        src={image}
                        alt={`image galery ${index}`}
                        className="w-full hover:scale-[1.01] object-cover transition-all duration-300"
                      />
                      <div className="absolute bottom-1 left-0 px-3 text-white ">
                        <span className="text-sm">Feature</span>
                        <h1 className=" text-lg font-bold">Category</h1>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </SectionWrapper>
        {/* features products  */}
        <SectionWrapper>
          <div className="px-12 space-y-5">
            <div className="flex justify-between items-center">
              <LeadingTitle title={"Feature Products"} />
              {/* view all buttons */}
              <button
                type="button"
                className="text-blue-900 text-nowrap font-semibold hover:underline underline-offset-2 decoration-clone"
              >
                View all
              </button>
            </div>
            {/* product grids */}
            <div className=" flex overflow-x-auto snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
              <div className="h-[370px] relative min-w-[250px] snap-start flex-shrink-0   group bg-blue-50 rounded-lg overflow-hidden cursor-pointer shadow-lg shadow-blue-50">
                {/* image  */}
                <img
                  src="https://picsum.photos/600/800?1"
                  alt=""
                  className=" h-[250px] w-full object-cover hover:scale-[1.02] transition-all duration-300  "
                />
                <div className=" h-[120px] p-3 flex flex-col justify-between ">
                  <div className="block">
                    {/* category */}
                    <span className=" text-gray-600 font-medium">
                      Electronics
                    </span>
                    {/* product title */}
                    <h1 className=" font-medium text-wrap">
                      Iphone 17 Pro Max
                    </h1>
                  </div>
                  <div className="flex justify-between items-center">
                    {/* product price  */}
                    <span className="font-bold text-blue-900">$299.00</span>
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
              <div className="h-[370px] relative min-w-[250px] snap-start flex-shrink-0   group bg-blue-50 rounded-lg overflow-hidden cursor-pointer shadow-lg shadow-blue-50">
                {/* image  */}
                <img
                  src="https://picsum.photos/600/800?1"
                  alt=""
                  className=" h-[250px] w-full object-cover hover:scale-[1.02] transition-all duration-300  "
                />
                <div className=" h-[120px] p-3 flex flex-col justify-between ">
                  <div className="block">
                    {/* category */}
                    <span className=" text-gray-600 font-medium">
                      Electronics
                    </span>
                    {/* product title */}
                    <h1 className=" font-medium text-wrap">
                      Iphone 17 Pro Max
                    </h1>
                  </div>
                  <div className="flex justify-between items-center">
                    {/* product price  */}
                    <span className="font-bold text-blue-900">$299.00</span>
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
              <div className="h-[370px] relative min-w-[250px] snap-start flex-shrink-0   group bg-blue-50 rounded-lg overflow-hidden cursor-pointer shadow-lg shadow-blue-50">
                {/* image  */}
                <img
                  src="https://picsum.photos/600/800?1"
                  alt=""
                  className=" h-[250px] w-full object-cover hover:scale-[1.02] transition-all duration-300  "
                />
                <div className=" h-[120px] p-3 flex flex-col justify-between ">
                  <div className="block">
                    {/* category */}
                    <span className=" text-gray-600 font-medium">
                      Electronics
                    </span>
                    {/* product title */}
                    <h1 className=" font-medium text-wrap">
                      Iphone 17 Pro Max
                    </h1>
                  </div>
                  <div className="flex justify-between items-center">
                    {/* product price  */}
                    <span className="font-bold text-blue-900">$299.00</span>
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
              <div className="h-[370px] relative min-w-[250px] snap-start flex-shrink-0   group bg-blue-50 rounded-lg overflow-hidden cursor-pointer shadow-lg shadow-blue-50">
                {/* image  */}
                <img
                  src="https://picsum.photos/600/800?1"
                  alt=""
                  className=" h-[250px] w-full object-cover hover:scale-[1.02] transition-all duration-300  "
                />
                <div className=" h-[120px] p-3 flex flex-col justify-between ">
                  <div className="block">
                    {/* category */}
                    <span className=" text-gray-600 font-medium">
                      Electronics
                    </span>
                    {/* product title */}
                    <h1 className=" font-medium text-wrap">
                      Iphone 17 Pro Max
                    </h1>
                  </div>
                  <div className="flex justify-between items-center">
                    {/* product price  */}
                    <span className="font-bold text-blue-900">$299.00</span>
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
              <div className="h-[370px] relative min-w-[250px] snap-start flex-shrink-0   group bg-blue-50 rounded-lg overflow-hidden cursor-pointer shadow-lg shadow-blue-50">
                {/* image  */}
                <img
                  src="https://picsum.photos/600/800?1"
                  alt=""
                  className=" h-[250px] w-full object-cover hover:scale-[1.02] transition-all duration-300  "
                />
                <div className=" h-[120px] p-3 flex flex-col justify-between ">
                  <div className="block">
                    {/* category */}
                    <span className=" text-gray-600 font-medium">
                      Electronics
                    </span>
                    {/* product title */}
                    <h1 className=" font-medium text-wrap">
                      Iphone 17 Pro Max
                    </h1>
                  </div>
                  <div className="flex justify-between items-center">
                    {/* product price  */}
                    <span className="font-bold text-blue-900">$299.00</span>
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
              <div className="h-[370px] relative min-w-[250px] snap-start flex-shrink-0   group bg-blue-50 rounded-lg overflow-hidden cursor-pointer shadow-lg shadow-blue-50">
                {/* image  */}
                <img
                  src="https://picsum.photos/600/800?1"
                  alt=""
                  className=" h-[250px] w-full object-cover hover:scale-[1.02] transition-all duration-300  "
                />
                <div className=" h-[120px] p-3 flex flex-col justify-between ">
                  <div className="block">
                    {/* category */}
                    <span className=" text-gray-600 font-medium">
                      Electronics
                    </span>
                    {/* product title */}
                    <h1 className=" font-medium text-wrap">
                      Iphone 17 Pro Max
                    </h1>
                  </div>
                  <div className="flex justify-between items-center">
                    {/* product price  */}
                    <span className="font-bold text-blue-900">$299.00</span>
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
            </div>
          </div>
        </SectionWrapper>
      </HomePagePageLayout>
    </>
  );
}
