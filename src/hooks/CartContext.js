import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();
export function CartProvider({ children }) {
  const [carts, setCarts] = useState({});
  const [totalCart, setTotalCart] = useState(0);

  return React.createElement(
    CartContext.Provider,
    { value: { carts, setCarts, totalCart, setTotalCart } },
    children,
  );
}
export default function useCart() {
  return useContext(CartContext);
}
