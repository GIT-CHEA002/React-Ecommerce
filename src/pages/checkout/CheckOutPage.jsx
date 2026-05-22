import { useEffect, useState } from "react";
import LeadingTitle from "../../components/LeadingTitle";
import axios from "axios";
import CheckoutPageLayout from "../../layouts/CheckoutPageLayout";
import OrderSummary from "./OrderSummary";
import CartProduct from "./CartProduct";

export default function CheckOutPage() {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    const getCart = async () => {
      const user = JSON.parse(localStorage.getItem("user_session"));
      try {
        if (user) {
          const url = `https://dummyjson.com/carts/user/${user.id}`;
          const respone = await axios.get(url);
          setCarts(respone.data.carts);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCart();
  }, []);

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
