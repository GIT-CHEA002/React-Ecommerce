import axios from "axios";
import { Leaf, Minus, Plus, Star, Timer } from "lucide-react";
import { BiCartAdd } from "react-icons/bi";
import { IoStarHalfOutline } from "react-icons/io5";

export default function ProductDetailText({
  productDisplayDetail,
  quantity,
  setQuantity,
  productId,
}) {
  return (
    <div className=" w-full md:w-[50%] md:px-6">
      <h1 className="text-lg text-blue-900 font-semibold">
        {productDisplayDetail.title}
      </h1>
      <div className="flex pe-2 items-center">
        <Star size={12} className="stroke-yellow-600 fill-yellow-600" />
        <Star size={12} className="stroke-yellow-600 fill-yellow-600" />
        <Star size={12} className="stroke-yellow-600 fill-yellow-600" />
        <Star size={12} className="stroke-yellow-600 fill-yellow-600" />
        <IoStarHalfOutline
          size={12}
          className="stroke-yellow-600 fill-yellow-600"
        />
        <span className="px-2 text-sm text-gray-600">{` ${productDisplayDetail.rating} / ${productDisplayDetail.reviews.length} reviews`}</span>
      </div>

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
          {productDisplayDetail.shippingInformation}
        </p>
      </div>
      {/* add to cart section */}
      <div className="flex mt-5 space-x-5 items-center">
        <div className="w-fit p-2 rounded-lg text-gray-600 bg-gray-200 flex space-x-3 items-center">
          <button
            disabled={quantity === 0 ? true : false}
            type="button"
            onClick={() => {
              if (quantity == 0) setQuantity(1);
              setQuantity(quantity - 1);
            }}
          >
            <Minus className="text-sm cursor-pointer" />
          </button>
          <input
            onChange={() => {}}
            type="text"
            name="quantity"
            id="quantity"
            value={quantity}
            className="bg-transparent w-[20px] font-bold"
          />
          <button
            type="button"
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            <Plus className="text-sm cursor-pointer" />
          </button>
        </div>
        <button
          className="flex flex-1 p-2 rounded-lg text-gray-600 font-semibold bg-blue-200  justify-center items-center space-x-4 "
          onClick={async () => {
            try {
              const response = await axios.post(
                "https://dummyjson.com/carts/add",
                {
                  userId: 1,
                  products: [
                    {
                      id: Number(productId),
                      quantity: quantity,
                    },
                  ],
                },
              );
              console.log("Cart updated successfully:", response.data);
            } catch (error) {
              console.error("Error adding item to cart:", error);
            }
          }}
        >
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
  );
}
