import ProductPageLayout from "../../layouts/ProductPageLayout";
import { useNavigate, useParams } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { Plus, Star } from "lucide-react";
import { Minus } from "lucide-react";
import { BiCartAdd, BiHeart } from "react-icons/bi";
import { Leaf } from "lucide-react";
import { Timer } from "lucide-react";
import LeadingTitle from "../../components/LeadingTitle";
import { IoStarHalfOutline } from "react-icons/io5";
import axios from "axios";
export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);
  const [productDisplayDetail, setProductDisplayDetail] = useState(null);
  const [categoryProduct, setCategoryProduct] = useState([]);
  const param = useParams();
  const navigator = useNavigate();
  const productId = param.id; // id of the detail products
  useEffect(() => {
    const getDisplayData = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${productId}`,
        );
        setProductDisplayDetail(response.data);

        const category = productDisplayDetail?.category || "";

        if (category) {
          const response = await axios.get(
            `https://dummyjson.com/products/category/${category}`,
          );
          setCategoryProduct(response.data.products || []);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (productId) getDisplayData();
  }, [productId, productDisplayDetail?.category]);
  // get the category of the products

  return (
    <ProductPageLayout>
      {/* product detail section */}
      <section className=" block md:flex justify-between pt-5 pb-5 md:space-x-8 ">
        {productDisplayDetail?.images && (
          <Fragment>
            <div className="w-full md:w-[50%]">
              <div className=" h-[70%] shadow rounded-lg overflow-hidden">
                <img
                  src={productDisplayDetail.images[0]}
                  alt={`product image index = ${productDisplayDetail.id} `}
                  className="w-full object-cover hover:scale-[1.01] transition-transform duration-300 "
                />
              </div>
              <div className="flex mt-4 h-[30%] space-x-8">
                <div className="w-[100px] h-[100px] shadow rounded-lg overflow-hidden hover:border-2 hover:border-blue-600 transition-all duration-200">
                  <img
                    src={productDisplayDetail.images[0]}
                    alt={`product image index = ${productDisplayDetail.id} `}
                    className="w-full h-full object-cover "
                  />
                </div>
                <div className="w-[100px] h-[100px] shadow rounded-lg overflow-hidden hover:border-2 hover:border-blue-600 transition-all duration-200">
                  <img
                    src={productDisplayDetail.images[0]}
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
                  <span className="line-through text-gray-600 text-sm">
                    $350
                  </span>
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
                    <p className=" text-xs text-gray-600">
                      Eco-friendly materials
                    </p>
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
          </Fragment>
        )}
      </section>
      {/* related product section */}
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
                      <h1 className=" font-medium text-wrap">
                        {product.title}
                      </h1>
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
    </ProductPageLayout>
  );
}
