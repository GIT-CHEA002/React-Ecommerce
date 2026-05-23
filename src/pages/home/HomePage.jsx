import HomePagePageLayout from "../../layouts/HomePageLayout";
import HeroSection from "./HeroSection";
import RandomProductImage from "./RandomProductImage";
import FeatureProduct from "./FeatureProduct";
import { Fragment } from "react";
import Loading from "../../components/shared/Loading";
export default function HomePage({ products }) {
  return (
    <Fragment>
      <HomePagePageLayout>
        <HeroSection />
        {products && products.length > 0 ? (
          <>
            <RandomProductImage products={products} />
            <FeatureProduct products={products} />
          </>
        ) : (
          <div className="h-[50vh] flex items-center">
            <Loading />
          </div>
        )}
      </HomePagePageLayout>
    </Fragment>
  );
}
