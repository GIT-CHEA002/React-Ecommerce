import { Route } from "react-router";
import { Routes } from "react-router";
import HomePage from "./pages/home/HomePage";
import CheckOutPage from "./pages/checkout/CheckOutPage";
import ProductDetailPage from "./pages/products/ProductDetailPage";
import { useEffect, useState } from "react";
import axios from "axios";
import LoginForm from "./pages/auth/loginForm";
import RegisterForm from "./pages/auth/RegisterForm";
import AuthLayout from "./layouts/AuthLayout";
import ScrollToTop from "./hooks/ScrollToTop";
import ProductPage from "./pages/products/ProductPage";

function App() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const url = "https://dummyjson.com/products";
        const respone = await axios.get(url);
        setProduct(respone.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);
  ScrollToTop();
  return (
    <Routes>
      <Route path="/" element={<HomePage products={products} />} />
      <Route path="/product">
        <Route index element={<ProductPage products={products} />} />
        <Route path=":id" element={<ProductDetailPage />} />
      </Route>
      <Route path="/checkout" element={<CheckOutPage />} />
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<LoginForm />} />
        <Route path="register" element={<RegisterForm />} />
      </Route>
    </Routes>
  );
}
export default App;
