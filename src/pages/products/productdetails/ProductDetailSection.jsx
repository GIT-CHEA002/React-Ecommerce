import { Fragment, useState } from "react";
import ProductDetailImage from "./ProductDetailImage";
import ProductDetailText from "./ProductDetailText";
export default function ProductDetailSection({
  productDisplayDetail,
  productId,
}) {
  const [quantity, setQuantity] = useState(1);
  return (
    <section className=" block md:flex justify-between pt-5 pb-5 md:space-x-8 ">
      {productDisplayDetail?.images && (
        <Fragment>
          {/* image section */}
          <ProductDetailImage productDisplayDetail={productDisplayDetail} />
          {/* details sections */}
          <ProductDetailText
            quantity={quantity}
            setQuantity={setQuantity}
            productDisplayDetail={productDisplayDetail}
            productId={productId}
          />
        </Fragment>
      )}
    </section>
  );
}
