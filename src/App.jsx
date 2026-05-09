import { Route } from "react-router";
import { Routes } from "react-router";
import HomePage from "./HomePage";
import CheckOutPage from "./CheckOutPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/checkout" element={<CheckOutPage />}></Route>
    </Routes>
  );
}

export default App;
