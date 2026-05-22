import { ArrowRight, BadgeCheck, Truck } from "lucide-react";

export default function OrderSummary({ carts }) {
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
    <div className="w-full md:w-[30%]">
      <div className="px-4 py-8 bg-gray-100 gray-100 rounded-lg overflow-hidden">
        <h1 className="text-lg font-semibold text-blue-900">Order Summary</h1>
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
          <span className="font-semibold">${carts[0]?.discountedTotal}</span>
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
  );
}
