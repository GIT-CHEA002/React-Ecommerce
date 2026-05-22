import HomePagePageLayout from "../../layouts/HomePageLayout";
import HeroSection from "./HeroSection";
import RandomProductImage from "./RandomProductImage";
import FeatureProduct from "./FeatureProduct";
import { Fragment } from "react";
export default function HomePage({ products }) {
  return (
    <Fragment>
      <title>Home</title>
      <HomePagePageLayout>
        <HeroSection />
        <RandomProductImage products={products} />
        <FeatureProduct products={products} />
      </HomePagePageLayout>
    </Fragment>
  );
}
