import { BiHeart } from "react-icons/bi";
import ProductPageLayout from "../layouts/ProductPageLayout";
import { ChevronRight, List } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";
const products = [
  {
    id: 1,
    title: "Lumina Pro Wireless Headphones",
    price: 299.0,
    image: "https://picsum.photos/600/800?1",
    description:
      "Experience crystal-clear audio with the Lumina Pro Wireless Headphones, designed for music lovers, gamers, and professionals alike. Featuring advanced noise-canceling technology, ultra-soft memory foam ear cushions, and up to 40 hours of battery life, these headphones provide immersive sound quality wherever you go. Seamlessly connect to multiple devices with Bluetooth 5.3 and enjoy deep bass, balanced mids, and sharp highs in every track.",
  },
  {
    id: 2,
    title: "Nova Smart Watch Series X",
    price: 189.99,
    image: "https://picsum.photos/600/800?2",
    description:
      "Stay connected and in control with the Nova Smart Watch Series X. Built with a vibrant AMOLED display and durable aluminum body, this smartwatch combines elegance with powerful functionality. Monitor your heart rate, sleep patterns, stress levels, and daily activities while receiving notifications, calls, and messages directly on your wrist. Water-resistant and equipped with a long-lasting battery, it is perfect for workouts, travel, and everyday productivity.",
  },
  {
    id: 3,
    title: "AeroFit Running Shoes",
    price: 129.5,
    image: "https://picsum.photos/600/800?3",
    description:
      "Push your limits with the AeroFit Running Shoes, engineered for comfort, speed, and durability. The breathable mesh upper keeps your feet cool during intense workouts, while the responsive foam cushioning absorbs impact for a smoother stride. Designed with anti-slip rubber soles and lightweight construction, these shoes provide excellent grip and support whether you're running on city streets, gym tracks, or outdoor trails.",
  },
  {
    id: 4,
    title: "ZenBook Ultra Laptop",
    price: 1199.0,
    image: "https://picsum.photos/600/800?4",
    description:
      "The ZenBook Ultra Laptop delivers exceptional performance in a sleek and portable design. Powered by the latest high-speed processor and equipped with a stunning ultra-HD display, this laptop is ideal for creators, students, and professionals. Enjoy lightning-fast multitasking, extended battery life, and premium build quality with an ultra-slim aluminum chassis. Whether you're editing videos, coding, or streaming entertainment, the ZenBook Ultra handles every task effortlessly.",
  },
  {
    id: 5,
    title: "PixelCam 4K Action Camera",
    price: 249.99,
    image: "https://picsum.photos/600/800?5",
    description:
      "Capture unforgettable adventures in stunning detail with the PixelCam 4K Action Camera. Built for explorers and content creators, this compact camera supports ultra-HD video recording, image stabilization, slow-motion capture, and waterproof protection up to 30 meters. Easily mount it on bikes, helmets, or drones to record every exciting moment. With built-in Wi-Fi and mobile app support, sharing your experiences has never been easier.",
  },
  {
    id: 6,
    title: "CloudSoft Hoodie",
    price: 59.99,
    image: "https://picsum.photos/600/800?6",
    description:
      "Wrap yourself in comfort with the CloudSoft Hoodie, crafted from a premium cotton-polyester blend for maximum softness and warmth. Featuring a relaxed fit, adjustable drawstring hood, and spacious front pocket, this hoodie is perfect for casual outings, lounging at home, or layering during colder weather. Its minimalist modern design pairs effortlessly with jeans, joggers, or shorts, making it a versatile wardrobe essential.",
  },
];
export default function ProductPage() {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <>
      <title>Product</title>
      <ProductPageLayout>
        <div>
          <button
            className="fixed top-60 px-5 left-0 z-50 md:hidden block bg-white p-2 rounded-e shadow-md border border-gray-200 hover:bg-gray-50 transition-colors"
            onClick={() => {
              setSideBarOpen(!sideBarOpen);
            }}
            aria-label="toggle-sidebar"
          >
            <List />
          </button>
          <div className="flex h-screen relative ">
            {/* side bar */}
            <aside
              // className={`pt-12  z-50 md:block md:sticky top-20 w-fit md:w-[260px] h-[calc(100vh-120px)] ${sideBarOpen ? "block" : "hidden"} `}
              className={`
                fixed inset-y-0 top-12 left-0 z-40 w-[260px] bg-white p-6 pt-12 border-r border-gray-100 transition-transform duration-300 ease-in-out md:transform-none md:z-10 md:block md:sticky md:top-0 md:h-full md:border-r-0
                ${sideBarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
              `}
            >
              <h1 className="text-gray-600  text-sm font-semibold">
                CATEGORYS
              </h1>
              <ul className="px-3 space-y-2 mt-3 border-b border-gray-400 pb-5">
                <li className="flex justify-between p-2 rounded-lg text-blue-900 hover:bg-blue-300 active:font-semibold transition-all duration-300">
                  <a href="#">All Products</a>
                  <ChevronRight />
                </li>
                <li className="flex justify-between  p-2 rounded-lg text-blue-900 hover:bg-blue-300 active:font-semibold transition-all duration-300">
                  <a href="#">Electronics</a>
                  <ChevronRight />
                </li>
                <li className="flex justify-between  p-2 rounded-lg text-blue-900 hover:bg-blue-300 active:font-semibold transition-all duration-300">
                  <a href="#">Jewelery</a>
                  <ChevronRight />
                </li>
                <li className="flex justify-between  p-2 rounded-lg text-blue-900 hover:bg-blue-300 active:font-semibold transition-all duration-300">
                  <a href="#">Men's Clothings</a>
                  <ChevronRight />
                </li>
                <li className="flex justify-between  p-2 rounded-lg text-blue-900 hover:bg-blue-300 active:font-semibold transition-all duration-300">
                  <a href="#">Women's Clothings</a>
                  <ChevronRight />
                </li>
              </ul>
              <div className="border-b border-gray-400 pt-2 pb-8">
                <h1 className="text-blue-900 text-sm font-semibold">
                  PRICE RANGES
                </h1>
                <div className="px-5">
                  <input
                    type="range"
                    name=""
                    id=""
                    className="w-full h-1 rounded-lg  accent-blue-900 "
                  />
                  <div className="flex justify-between mt-1 appearance-none text-blue-900 font-semibold">
                    <span>$0</span>
                    <span>$1000+</span>
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <h1 className="text-blue-900 text-sm font-semibold pb-1">
                  RATINGS
                </h1>
                <div className="text-gray-600">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="" className=" px-2 ">
                    4 Stars & Above
                  </label>
                </div>
                <div className="text-gray-600">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="" className=" px-2 ">
                    3 Stars & Above
                  </label>
                </div>
              </div>
            </aside>

            {/* scroll able right side */}
            <div className="flex-1 relative  z-20 md:ps-12 mt-12 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth">
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

              <div className="flex mt-5 snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products &&
                  products.map((product) => {
                    return (
                      <div
                        key={product.id}
                        className="h-[380px]  min-w-[250px] snap-start group bg-blue-50 rounded-lg overflow-hidden cursor-pointer shadow-lg shadow-blue-50"
                      >
                        {/* image  */}

                        <div className="h-[220px] w-full py-8 px-10 border-b">
                          <img
                            src={product.image}
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
                            <span className="text-blue-900">
                              ${product.price}
                            </span>
                          </div>
                          <p className=" text-gray-600 font-light line-clamp-2 leading-tight">
                            {product.description}
                          </p>
                          <div className="flex justify-between items-center space-x-5 ">
                            {/* <button className="flex-1 text-sm text-blue-900 bg-blue-200 p-2 rounded-lg"></button> */}
                            <NavLink
                              to={`/product/${product.id}`}
                              state={{ product }}
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
            </div>
          </div>
        </div>
      </ProductPageLayout>
    </>
  );
}
