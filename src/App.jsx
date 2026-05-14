import { Route } from "react-router";
import { Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CheckOutPage from "./CheckOutPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/checkout" element={<CheckOutPage />}></Route>
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
