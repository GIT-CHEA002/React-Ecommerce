import { Minus, Plus } from "lucide-react";

export default function CartProduct({ carts }) {
  return (
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
                <div className="flex-1 min-w-0 px-4 md:px-5">
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
                      parseFloat(product.price) * parseInt(product.quantity)
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
  );
}
