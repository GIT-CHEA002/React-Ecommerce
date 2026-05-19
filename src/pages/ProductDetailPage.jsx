import ProductPageLayout from "../layouts/ProductPageLayout";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";
import { BiCartAdd, BiHeart } from "react-icons/bi";
import { Leaf } from "lucide-react";
import { Timer } from "lucide-react";
import LeadingTitle from "../components/LeadingTitle";

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
export default function ProductDetailPage() {
  console.log(products);
  const location = useLocation();
  const productDisplayDetail = location.state?.product;
  const [quality, setQuantity] = useState(1);
  return (
    <ProductPageLayout>
      {/* product detail section */}
      <section className=" block md:flex justify-between pt-5 pb-5 md:space-x-8 ">
        <div className="w-full md:w-[50%]">
          <div className=" h-[70%] rounded-lg overflow-hidden">
            <img
              src={productDisplayDetail.image}
              alt={`product image index = ${productDisplayDetail.id} `}
              className="w-full object-cover hover:scale-[1.01] transition-transform duration-300 "
            />
          </div>
          <div className="flex mt-4 h-[30%] space-x-8">
            <div className="w-[100px] h-[100px] rounded-lg overflow-hidden hover:border-2 hover:border-blue-600 transition-all duration-200">
              <img
                src={productDisplayDetail.image}
                alt={`product image index = ${productDisplayDetail.id} `}
                className="w-full h-full object-cover "
              />
            </div>
            <div className="w-[100px] h-[100px] rounded-lg overflow-hidden hover:border-2 hover:border-blue-600 transition-all duration-200">
              <img
                src={productDisplayDetail.image}
                alt={`product image index = ${productDisplayDetail.id} `}
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>

        <div className=" w-full md:w-[50%] md:px-6">
          <h1 className="text-lg text-blue-900 font-semibold">
            {productDisplayDetail.title}
          </h1>
          <h1 className="text-base">Rating = 4.5</h1>
          <p className="py-4 text-sm mx-auto leading-normal tracking-wide text-gray-600 first-letter:text-blue-900 first-letter:text-lg">
            {productDisplayDetail.description}
          </p>
          <div className="py-4 space-y-3 border-b border-t border-gray-300">
            <div className="space-x-3">
              <span className="text-blue-900 text-2xl font-semibold">
                ${productDisplayDetail.price}
              </span>
              <span className="line-through text-gray-600 text-sm">$350</span>
            </div>
            <p className="text-blue-900 text-base">
              Free Standard Shippings on all order this week{" "}
            </p>
          </div>
          {/* add to cart section */}
          <div className="flex mt-5 space-x-5 items-center">
            <div className="w-fit p-2 rounded-lg text-gray-600 bg-gray-200 flex space-x-3 items-center">
              <button
                disabled={quality === 0 ? true : false}
                type="button"
                onClick={() => {
                  if (quality == 0) setQuantity(1);
                  setQuantity(quality - 1);
                }}
              >
                <Minus className="text-sm cursor-pointer" />
              </button>
              <input
                onChange={() => {}}
                type="text"
                name="quantity"
                id="quantity"
                value={quality}
                className="bg-transparent w-[20px] font-bold"
              />
              <button
                type="button"
                onClick={() => {
                  setQuantity(quality + 1);
                }}
              >
                <Plus className="text-sm cursor-pointer" />
              </button>
            </div>
            <button className="flex flex-1 p-2 rounded-lg text-gray-600 font-semibold bg-blue-200  justify-center items-center space-x-4 ">
              <BiCartAdd className="text-lg" />
              <span>Add To Cart</span>
            </button>
          </div>
          <div className="mt-5">
            <button className="w-full px-2 py-3 rounded-lg border-2 border-blue-900 text-blue-900 font-semibold  space-x-4 hover:bg-blue-200 hover:text-white hover:border-white/30 transition-colors duration-300   ">
              Add To Wishlist
            </button>
          </div>
          <div className="flex mt-5 space-x-8">
            <div className=" p-2 flex items-center space-x-4 w-[50%] bg-gray-100/60 rounded-lg ">
              <Leaf className="text-blue-900" />
              <div className="block">
                <h1 className="text-sm font-bold">Sustainable</h1>
                <p className=" text-xs text-gray-600">Eco-friendly materials</p>
              </div>
            </div>
            <div className="p-2 flex items-center space-x-4 w-[50%] bg-gray-100/60 rounded-lg">
              <Timer className="text-blue-900" />
              <div className="block">
                <h1 className="text-sm font-bold">Handmade</h1>
                <p className=" text-xs text-gray-600">Create in 14 days</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* related product section */}
      <section className="">
        <LeadingTitle title={"Related Product"} />
        <h1 className="text-gray-600 text-base mb-4">
          Curated items that implement your style
        </h1>

        <div className=" flex overflow-x-auto snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {products &&
            products.map((product) => {
              return (
                <div
                  key={product.id}
                  className="h-[370px] relative min-w-[250px] snap-start flex-shrink-0 group bg-blue-50 rounded-lg overflow-hidden cursor-pointer shadow-lg shadow-blue-50"
                >
                  {/* image */}
                  <img
                    src={product.image}
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
                        {product.title}
                      </h1>
                    </div>
                    <div className="flex justify-between items-center">
                      {/* product price  */}
                      <span className="font-bold text-blue-900">
                        {product.price}
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
    </ProductPageLayout>
  );
}
