import { useEffect, useState } from "react";
import LeadingTitle from "../components/LeadingTitle";
import ProductPageLayout from "../layouts/ProductPageLayout";
import axios from "axios";
import { ArrowRight, BadgeCheck, Minus, Plus, Truck } from "lucide-react";

export default function CheckOutPage() {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    const getCart = async () => {
      const user = JSON.parse(localStorage.getItem("user_session"));
      try {
        if (user) {
          const url = `https://dummyjson.com/carts/user/${user.id}`;
          const respone = await axios.get(url);
          setCarts(respone.data.carts);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCart();
  }, []);
  const estimatedTotalDiscountPercentage =
    (carts[0]?.products.reduce(
      (acc, product) => acc + product.discountPercentage,
      0,
    ) || 0) / 4;

  const estimatedTotalDiscount =
    (carts[0]?.products.reduce(
      (acc, product) => acc + product.discountedTotal,
      0,
    ) || 0) / 4;
  return (
    <ProductPageLayout>
      <section className="mt-5">
        <LeadingTitle title={"Shopping Cart"} />
        <p className="text-gray-600 pt-2">You have product in carts</p>
        <div className=" block md:flex space-y-4 md:space-y-0  md:space-x-8">
          <div className=" w-full md:w-[70%] block space-y-5 ">
            {carts.map((cart) =>
              cart.products.map((product) => {
                return (
                  <div
                    key={product.id}
                    className=" h-fit px-4 py-2 bg-gray-100/70 rounded-lg flex flex-col sm:flex-row justify-between"
                  >
                    <div className="flex items-center w-full sm:w-auto overflow-hidden border-b pb-1.5 sm:pb-0  sm:border-none border-gray-400">
                      <div className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] flex-shrink-0 border hover:border-blue-900 rounded-lg transition-all duration-200 overflow-hidden bg-white">
                        <img
                          src={product.thumbnail}
                          alt={`product image ${product.id}`}
                          className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-200"
                        />
                      </div>
                      <div className="flex-1 text-end min-w-0 px-4 md:px-5">
                        <h1 className="text-sm md:text-lg font-semibold text-blue-900 leading-normal truncate sm:whitespace-normal">
                          {product.title}
                        </h1>
                        <p className="text-xs md:text-sm text-gray-600 mt-0.5">
                          ${product.price} each
                        </p>
                      </div>
                    </div>
                    <div className="w-full sm:w-auto flex-1 flex flex-row items-center justify-between sm:justify-end gap-4 sm:gap-8 border-t sm:border-0 pt-3 sm:pt-0 border-gray-200/60">
                      <div className="p-2 rounded-lg text-gray-600 bg-gray-200 flex items-center justify-between space-x-3">
                        <button
                          disabled={product.quantity <= 1}
                          type="button"
                          onClick={() => {}}
                          className="p-0.5 hover:bg-gray-300 rounded transition-colors disabled:opacity-40"
                        >
                          <Minus className="w-3.5 h-3.5 cursor-pointer" />
                        </button>

                        <input
                          onChange={() => {}}
                          type="text"
                          name="quantity"
                          id="quantity"
                          readOnly
                          value={product.quantity}
                          className="bg-transparent text-sm w-[24px] text-center font-bold text-gray-800 outline-none"
                        />

                        <button
                          type="button"
                          onClick={() => {}}
                          className="p-0.5 hover:bg-gray-300 rounded transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5 cursor-pointer" />
                        </button>
                      </div>

                      <div className="text-right min-w-[90px] flex flex-col justify-end">
                        <h1 className="font-semibold text-gray-900 md:text-lg">
                          $
                          {(
                            parseFloat(product.price) *
                            parseInt(product.quantity)
                          ).toFixed(2)}
                        </h1>
                        <button
                          type="button"
                          onClick={() => {}}
                          className="text-xs md:text-sm text-red-500 hover:text-red-700 hover:underline mt-0.5 transition-colors text-end"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }),
            )}
          </div>
          <div className="w-full md:w-[30%]">
            <div className="px-4 py-8 bg-gray-100 gray-100 rounded-lg overflow-hidden">
              <h1 className="text-lg font-semibold text-blue-900">
                Order Summary
              </h1>
              <div className="space-y-2">
                <p className="flex text-sm justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${carts[0]?.total}</span>
                </p>
                <p className="flex text-sm justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-semibold text-blue-900">Free</span>
                </p>

                <p className="flex text-sm justify-between text-gray-600">
                  <span>
                    Total Discount
                    {`(${estimatedTotalDiscountPercentage.toFixed(2)}%)`}
                  </span>
                  <span>${estimatedTotalDiscount}</span>
                </p>
              </div>
              <p className="flex justify-between text-gray-600 my-5">
                <span className="font-semibold text-blue-900">Total</span>
                <span className="font-semibold">
                  ${carts[0]?.discountedTotal}
                </span>
              </p>
              <button
                type="button"
                onClick={() => {}}
                className="bg-blue-200 text-blue-900 flex justify-center items-center w-full p-2 rounded-lg"
              >
                Place your order
                <ArrowRight size={18} className="ms-1" />
              </button>
              <div className="block space-y-2 mt-5 text-sm">
                <p className="flex justify-start items-center text-gray-600">
                  <BadgeCheck size={18} className="me-1" />
                  Secure checkout powered by Lumina
                </p>
                <p className="flex justify-start items-center text-gray-600">
                  <Truck size={18} className="me-1" />
                  Free Carbons-neutral shipping
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ProductPageLayout>
  );
}
