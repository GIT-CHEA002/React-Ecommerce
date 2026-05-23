export default function ProductDetailImage({ productDisplayDetail }) {
  return (
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
  );
}
