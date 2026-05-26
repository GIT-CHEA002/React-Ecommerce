import { useEffect } from "react";
import LeadingTitle from "../../components/LeadingTitle";
import CheckoutPageLayout from "../../layouts/CheckoutPageLayout";
import OrderSummary from "./OrderSummary";
import CartProduct from "./CartProduct";
import useCart from "../../hooks/CartContext";
import { getAllCart } from "../../services/CartService";

export default function CheckOutPage() {
  const { carts, setCarts } = useCart();
  const user = JSON.parse(localStorage.getItem("user_session"));
  useEffect(() => {
    const getCart = async () => {
      try {
        if (user) {
          const data = await getAllCart(user);
          console.log(data);
          setCarts(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCart();
  }, [user, setCarts]);

  console.log(carts);
  return (
    <CheckoutPageLayout>
      <section className="mt-5">
        <LeadingTitle title={"Shopping Cart"} />
        <p className="text-gray-600 pt-2">You have product in carts</p>
        <div className="block md:flex sm:space-y-4 md:space-y-0  md:space-x-8">
          {/* products */}
          <CartProduct carts={carts} />
          {/* order summary */}
          <OrderSummary carts={carts} />
        </div>
      </section>
    </CheckoutPageLayout>
  );
}
