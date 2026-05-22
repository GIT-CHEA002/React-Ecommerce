import ProductPageLayout from "../../../layouts/ProductPageLayout";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductDetailSection from "./ProductDetailSection";
import { useEffect, useState } from "react";
import RelatedProductSection from "./RelatedProductSection";
export default function ProductDetailPage() {
  const [productDisplayDetail, setProductDisplayDetail] = useState(null);
  const [categoryProduct, setCategoryProduct] = useState([]);
  const param = useParams();
  const productId = param.id;
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
  return (
    <ProductPageLayout>
      {/* product detail section */}
      <ProductDetailSection
        productDisplayDetail={productDisplayDetail}
        productId={productId}
      />
      {/* related product section */}
      <RelatedProductSection categoryProduct={categoryProduct} />
    </ProductPageLayout>
  );
}
