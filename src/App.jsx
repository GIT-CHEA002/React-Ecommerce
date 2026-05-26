import { Route } from "react-router";
import { Routes } from "react-router";
import { useEffect, useState } from "react";
import HomePage from "./pages/home/HomePage";
import CheckOutPage from "./pages/checkout/CheckOutPage";
import ProductDetailPage from "./pages/products/productdetailpage/ProductDetailPage";
import LoginForm from "./pages/auth/loginForm";
import RegisterForm from "./pages/auth/RegisterForm";
import AuthLayout from "./layouts/AuthLayout";
import ScrollToTop from "./hooks/ScrollToTop";
import ProductPage from "./pages/products/productpage/ProductPage";
import { SearchProvider } from "./hooks/SearchContext";
import { CartProvider } from "./hooks/CartContext";
import { getProducts } from "./services/ProductService";
function App() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProduct(data);
    };
    fetchProducts();
  }, []);
  ScrollToTop();
  return (
    <SearchProvider>
      <CartProvider>
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
      </CartProvider>
    </SearchProvider>
  );
}
export default App;
