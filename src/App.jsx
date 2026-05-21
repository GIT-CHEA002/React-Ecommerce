import { Route } from "react-router";
import { Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CheckOutPage from "./pages/CheckOutPage";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { useEffect, useState } from "react";
import axios from "axios";
import LoginForm from "./pages/auth/loginForm";
import RegisterForm from "./pages/auth/RegisterForm";
import AuthLayout from "./layouts/AuthLayout";
import ScrollToTop from "./hooks/ScrollToTop";

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
// routes :
/**
 * 1. / = homepae
 * 2. /products = view all products
 * 3. /checkout = checkout page
 * 4. /orders = order page
 */

export default App;
